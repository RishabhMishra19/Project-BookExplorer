const { typeDefs } = require("./graphql/typeDefs.js");
const { resolvers } = require("./graphql/resolvers.js");

const { authorLoader, bookLoader } = require("./graphql/dataLoaders.js");
const db = require("./models/index.js");
const express = require("express");
const cors = require("cors");
const { expressMiddleware } = require("@apollo/server/express4");
const { ApolloServer } = require("@apollo/server");

const createExpressApp = async () => {
  const app = express();
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
  await server.start();
  console.log("Appollo server started successfully");
  await db.sequelize.authenticate();
  console.log("Database authenticated successfully");
  app.use("/graphql", cors(), express.json(), expressMiddleware(server));
  return app;
};

createExpressApp()
  .then((app) =>
    app.listen(4000, () => {
      console.log("Backend is listening on port: 4000");
    })
  )
  .catch((error) => console.log(`Some error occured: ${error}`));
