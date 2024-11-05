import { ApolloClient, InMemoryCache } from "@apollo/client";

export const createApolloClient = () => {
  return new ApolloClient({
    uri: "/api/graphql",
    cache: new InMemoryCache(),
  });
};
