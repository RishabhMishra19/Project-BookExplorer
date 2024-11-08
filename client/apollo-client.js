import { ApolloClient, InMemoryCache } from "@apollo/client";
import { config } from "dotenv";
config();

export const createApolloClient = () => {
  const isDev = process.env.NODE_ENV === "development";
  const backendUrl = `https://bookexplorerbackend.onrender.com/graphql`;
  const devBackendUrl = `http://localhost:4000/graphql`;

  return new ApolloClient({
    uri: isDev ? devBackendUrl : backendUrl,
    cache: new InMemoryCache(),
  });
};
