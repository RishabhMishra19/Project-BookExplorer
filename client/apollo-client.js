import { ApolloClient, InMemoryCache } from "@apollo/client";

export const createApolloClient = () => {
  // const backendUrl = `https://bookexplorerbackend.onrender.com/graphql`;
  const devBackendUrl = `http://localhost:4000/graphql`;
  return new ApolloClient({
    uri: devBackendUrl,
    cache: new InMemoryCache(),
  });
};
