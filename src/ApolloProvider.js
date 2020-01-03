import React from 'react';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App';

const client = new ApolloClient({
    link: new HttpLink({
      uri: 'https://streamship.herokuapp.com/v1/graphql',
      headers: {
      }
    }),
    cache: new InMemoryCache(),
  });
 export default (
     <ApolloProvider client = {client}>
        <App/>
     </ApolloProvider>
 )