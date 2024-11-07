const { typeDefs } = require("./graphql/typeDefs.js");
const { resolvers } = require("./graphql/resolvers.js");
const { ApolloServer } = require("apollo-server");
const { authorLoader, bookLoader } = require("./graphql/dataLoaders.js");
const db = require("./models/index.js");

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

db.sequelize
  .authenticate()
  .then(() => {
    console.log("DB Connection has been established successfully.");
    server
      .listen()
      .then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
      })
      .catch((error) => console.error("Unable to start the server:", error));
  })
  .catch((error) => console.error("Unable to connect to the database:", error));
