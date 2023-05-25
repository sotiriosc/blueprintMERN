// apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql', // Your GraphQL server url
  cache: new InMemoryCache()
});

export default client;
