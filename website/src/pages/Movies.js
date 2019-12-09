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
    }
  }
`;

function Movies() {
  const { loading, error, data } = useQuery(GET_NETFLIX_MOVIES);
  if (data) {
    console.log(data);
  }
  return (
    <Grid columns={3}>
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
    </Grid>
  );
}

export default Movies;
