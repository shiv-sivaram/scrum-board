import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { AUTH_TOKEN, GRAPHQL_ENDPOINT } from '../constants'
import { ApolloLink, concat } from 'apollo-link';
import { InMemoryCache } from 'apollo-boost';

const httpLink = new HttpLink({ uri: GRAPHQL_ENDPOINT });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: AUTH_TOKEN,
    }
  });

  return forward(operation);
})

export const apolloClient = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache()
})
