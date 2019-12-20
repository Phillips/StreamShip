import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Grid, Loader } from "semantic-ui-react";
import MediaCard from "../components/MediaCard";

const GET_NETFLIX_MOVIES = gql`
  {
    netflix_movies {
      image
      name
      url
      provider
      year
      rating
      duration
      genre
      description
      cast
      imdb_score
      rotten_tomatoes_score
      metacritic_score
    }
  }
`;

function Movies() {
  const { loading, error, data } = useQuery(GET_NETFLIX_MOVIES);
  if (data) {
    console.log(data);
  }
  else if(error){
    console.log(error)
  }
  return (
    <div class="ui stackable three column grid">
      <Grid.Row>
        {loading ? (
          <Loader active inline="centered" size="big">
            Preparing your movies...
          </Loader>
        ) : (
          data.netflix_movies &&
          data.netflix_movies.map(movie => (
            <Grid.Column key={movie.name} style={{ marginBottom: 20 }}>
              <MediaCard movie={movie} />
            </Grid.Column>
          ))
        )}
      </Grid.Row>
    </div>
  );
}

export default Movies;
