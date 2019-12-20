import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Grid, Loader } from "semantic-ui-react";
import MediaCard from "../components/MediaCard";

const GET_NETFLIX_TV_SHOWS = gql`
  {
    netflix_tv_shows {
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

function TVShows() {
  const { loading, error, data } = useQuery(GET_NETFLIX_TV_SHOWS);
  if (data) {
    console.log(data);
  }
  else if(error){
    console.log(error)
  }
  return (
    <Grid columns={3}>
      <Grid.Row>
        {loading ? (
          <Loader active inline="centered" size="big">
            Preparing your TV Shows...
          </Loader>
        ) : (
          data.netflix_tv_shows &&
          data.netflix_tv_shows.map(movie => (
            <Grid.Column key={movie.name} style={{ marginBottom: 20 }}>
              <MediaCard movie={movie} />
            </Grid.Column>
          ))
        )}
      </Grid.Row>
    </Grid>
  );
}

export default TVShows;
