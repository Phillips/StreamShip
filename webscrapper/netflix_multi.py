from const import *
import omdb
import json


def run_query(query):
    import requests

    request = requests.post('https://streamship.herokuapp.com/v1/graphql', json={'query': query}, headers=headers)
    if request.status_code == 200:
        return request.json()
    else:
        raise Exception("Query failed to run by returning code of {}. {}".format(request.status_code, query))


def get_data(query, url, row_class, title_class, link_class, img_class, year_class, rating_class, duration_class, genre_class, description_class, cast_class, provider):
    from selenium import webdriver

    omdb.set_default('apikey', "cafdc156")
    driver = webdriver.Chrome("/Users/andrew/Downloads/chromedriver")
    detailsDriver = webdriver.Chrome("/Users/andrew/Downloads/chromedriver")
    driver.get(url)
    assert provider in driver.title
    query_data = []
    checker_data = []
    ele = driver.find_elements_by_class_name(row_class)
    for itm in ele:
        itm.location_once_scrolled_into_view
    for itm in ele:
        itm.location_once_scrolled_into_view
    for itm in ele:
        name = itm.find_element_by_class_name(title_class).text

        if any(name == itm.get('name') for itm in checker_data):
            print("Duplicate found: ", name)
        else:
            itmURL = itm.find_element_by_class_name(link_class).get_attribute("href")
            img = itm.find_element_by_class_name(img_class).get_attribute("src")

            detailsDriver.get(itmURL)
            year = detailsDriver.find_element_by_class_name(year_class).text
            rating = detailsDriver.find_element_by_class_name(rating_class).text
            try:
                duration = detailsDriver.find_element_by_class_name(duration_class).text
            except:
                duration = detailsDriver.find_element_by_class_name("duration").text
            genre = detailsDriver.find_element_by_class_name(genre_class).text
            description = detailsDriver.find_element_by_class_name(description_class).text
            description_fix = description.replace('"', "")
            try:
                cast = detailsDriver.find_element_by_class_name(cast_class).text
            except:
                cast = None
            mdb_result = omdb.get(title=name)
            imdb_score = None
            rt_score = None
            meta_score = None
            if "ratings" in mdb_result and "rated" in mdb_result and mdb_result['rated'] == rating and "year" in mdb_result and mdb_result['year'][:4] == year:
                for scores in mdb_result['ratings']:
                    if scores['source'] == "Internet Movie Database":
                        imdb_score = scores['value']
                    elif scores['source'] == "Rotten Tomatoes":
                        rt_score = scores['value']
                    elif scores['source'] == "Metacritic":
                        meta_score = scores['value']
            test = {'name': name}
            checker_data.append(test)
            query_data.append(f'{{name: "{name}",url: "{itmURL}",image: "{img}",provider: "{provider}",year: "{year}",rating: "{rating}",duration: "{duration}",genre: "{genre}",description: "{description_fix}",cast: "{cast}",imdb_score: "{imdb_score}",rotten_tomatoes_score: "{rt_score}",metacritic_score: "{meta_score}"}}')
    driver.close()
    detailsDriver.close()
    formatted_data = "[{0}]".format(', '.join(map(str, query_data)))
    response = run_query(query.format(formatted_data))
    print(json.dumps(response, indent=4, sort_keys=True))


# Netflix
get_data(netflix_movies_query, netflix_movies_url, "nm-content-horizontal-row-item", "nm-collections-title-name", "nm-collections-link",
         "nm-collections-title-img", "item-year", "maturity-number", "duration", "item-genre", "title-info-synopsis", "title-data-info-item-list", "Netflix")
get_data(netflix_tv_shows_query, netflix_tv_shows_url, "nm-content-horizontal-row-item", "nm-collections-title-name", "nm-collections-link",
         "nm-collections-title-img", "item-year", "maturity-number", "test_dur_str", "item-genre", "title-info-synopsis", "title-data-info-item-list", "Netflix")
