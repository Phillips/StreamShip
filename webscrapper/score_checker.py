import omdb
import json

omdb.set_default('apikey', "cafdc156")
result = omdb.get(title="The Knight Before Christmas")
print(json.dumps(result, indent=4, sort_keys=True))
if "ratings" in result and "rated" in result and result['rated'] == "PG-13" and "year" in result and result['year'][:4] == "2018":
    for rating in result['ratings']:
        if rating['source'] == "Internet Movie Database":
            print(rating['source'])
            print(rating['value'])
        elif rating['source'] == "Rotten Tomatoes":
            print(rating['source'])
            print(rating['value'])
        elif rating['source'] == "Metacritic":
            print(rating['source'])
            print(rating['value'])