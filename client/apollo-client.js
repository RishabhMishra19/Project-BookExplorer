import { ApolloClient, InMemoryCache } from "@apollo/client";

export const createApolloClient = () => {
  console.log("bacend ur", `${process.env.BACKEND_BASE_URL}/graphql`);
  return new ApolloClient({
    uri: `${process.env.BACKEND_BASE_URL}/graphql`,
    cache: new InMemoryCache(),
  });
};
