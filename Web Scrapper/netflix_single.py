from const import *
import json

def run_query(query):
	import requests

	request = requests.post('https://streamship.herokuapp.com/v1/graphql', json={'query': query}, headers=headers)
	if request.status_code == 200:
		return request.json()
	else:
		raise Exception("Query failed to run by returning code of {}. {}".format(request.status_code, query))

def get_data(query ,link, row_class, title_class, link_class, img_class):
	from selenium import webdriver
	driver = webdriver.Chrome(executable_path="/Users/andrew/Downloads/chromedriver")
	driver.get(link)
	assert "Netflix" in driver.title
	ele = driver.find_elements_by_class_name(row_class)
	for itm in ele:
		itm.location_once_scrolled_into_view
	for itm in ele:
		itm.location_once_scrolled_into_view
	for itm in ele:
		name = itm.find_element_by_class_name(title_class).text
		url = itm.find_element_by_class_name(link_class).get_attribute("href")
		img = itm.find_element_by_class_name(img_class).get_attribute("src")
		response = run_query(query.format(name,url,img))
		print(json.dumps(response, indent=4, sort_keys=True))
	driver.close()
#Netflix
get_data(netflix_movies_query_single, netflix_movies_url, "nm-content-horizontal-row-item", "nm-collections-title-name", "nm-collections-link", "nm-collections-title-img")
get_data(netflix_tv_shows_query_single, netflix_tv_shows_url, "nm-content-horizontal-row-item", "nm-collections-title-name", "nm-collections-link", "nm-collections-title-img")

#Amazon Video
#get_data(prime_video_movies_query, prime_video_movies_url, "nm-content-horizontal-row-item", "nm-collections-title-name", "nm-collections-link", "nm-collections-title-img")
