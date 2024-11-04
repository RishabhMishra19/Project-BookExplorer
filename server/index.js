import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers.js";
import { ApolloServer } from "apollo-server";
import { authorLoader, bookLoader } from "./graphql/dataLoaders.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {
      authorLoader,
      bookLoader,
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
