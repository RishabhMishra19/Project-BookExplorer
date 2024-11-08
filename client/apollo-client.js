import { ApolloClient, InMemoryCache } from "@apollo/client";
const isDev = process.env.ENV === "dev";

export const createApolloClient = () => {
  const backendUrl = `https://bookexplorerbackend.onrender.com/graphql`;
  const devBackendUrl = `http://localhost:4000/graphql`;
  return new ApolloClient({
    uri: isDev ? devBackendUrl : backendUrl,
    cache: new InMemoryCache(),
  });
};
