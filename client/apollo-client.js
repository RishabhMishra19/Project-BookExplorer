import { ApolloClient, InMemoryCache } from "@apollo/client";
import { config } from "dotenv";
config();

export const createApolloClient = () => {
  const backendUrl = `https://bookexplorerbackend.onrender.com/graphql`;
  console.log("bacend ur", backendUrl);
  return new ApolloClient({
    uri: backendUrl,
    cache: new InMemoryCache(),
  });
};
