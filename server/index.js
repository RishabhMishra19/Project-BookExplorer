const { typeDefs } = require("./graphql/typeDefs.js");
const { resolvers } = require("./graphql/resolvers.js");

const { authorLoader, bookLoader } = require("./graphql/dataLoaders.js");
const db = require("./models/index.js");
const express = require("express");
const cors = require("cors");
const { expressMiddleware } = require("@apollo/server/express4");
const { ApolloServer } = require("@apollo/server");

const app = express();

const createExpressApp = async () => {
  try {
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
    app.listen(4000, () => {
      console.log("Backend is listening on port: 4000");
    });
    return app;
  } catch (error) {
    console.log(`Some error occured: ${error}`);
  }
};

createExpressApp();

module.exports = app;
