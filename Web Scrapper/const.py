headers = {"content-type": "application/json", "x-hasura-admin-secret":""}

netflix_movies_url = "https://www.netflix.com/browse/genre/34399"
netflix_tv_shows_url = "https://www.netflix.com/browse/genre/83"
prime_video_movies_url = "https://www.amazon.com/gp/video/storefront/ref=atv_mv_hom_3_slct?contentType=movie&filterId=OFFER_FILTER%3DPRIME"

netflix_movies_query = """mutation {{
  insert_netflix_movies(objects:{0},
		  on_conflict: {{
			  constraint: netflix_movies_pkey,
			  update_columns: [url, image]
			}}
	){{
    returning{{
      name
      url
      image
    }}
  }}
}}
"""

netflix_movies_query_single = """mutation {{
  insert_netflix_movies(objects:[
	  {{
		  name: "{0}",
		  url: "{1}",
		  image: "{2}"
		}}
		  ],
		  on_conflict: {{
			  constraint: netflix_movies_pkey,
			  update_columns: [url, image]
			}}
	){{
    returning{{
      name
      url
      image
    }}
  }}
}}
"""

netflix_tv_shows_query = """mutation {{
  insert_netflix_tv_shows(objects:{0},
		  on_conflict: {{
			  constraint: netflix_tv_shows_pkey,
			  update_columns: [url, image]
			}}
	){{
    returning{{
      name
      url
      image
    }}
  }}
}}
"""

netflix_tv_shows_query_single = """mutation {{
  insert_netflix_tv_shows(objects:[
	  {{
		  name: "{0}",
		  url: "{1}",
		  image: "{2}"
		  }}
		  ],
		  on_conflict: {{
			  constraint: netflix_tv_shows_pkey,
			  update_columns: [url, image]
			}}
	){{
    returning{{
      name
      url
      image
    }}
  }}
}}
"""

prime_video_movies_query  = """mutation {{
  insert_netflix_tv_shows(objects:[
	  {{
		  name: "{0}",
		  url: "{1}",
		  image: "{2}"
		  }}
		  ],
		  on_conflict: {{
			  constraint: amazon_prime_movies_pkey,
			  update_columns: [url, image]
			}}
	){{
    returning{{
      name
      url
      image
    }}
  }}
}}
"""
