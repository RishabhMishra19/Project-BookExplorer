const { typeDefs } = require("./graphql/typeDefs.js");
const { resolvers } = require("./graphql/resolvers.js");

const { authorLoader, bookLoader } = require("./graphql/dataLoaders.js");
const db = require("./models/index.js");
const express = require("express");
const cors = require("cors");
const { expressMiddleware } = require("@apollo/server/express4");
const { ApolloServer } = require("@apollo/server");
const {
  ApolloServerPluginDrainHttpServer,
} = require("@apollo/server/plugin/drainHttpServer");
const http = require("http");
const bodyParser = require("body-parser");

const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  context: () => {
    return {
      authorLoader,
      bookLoader,
    };
  },
});

const startServer = async () => {
  await server.start();
  app.use(cors(), bodyParser.json(), expressMiddleware(server));
  await db.sequelize.authenticate();
  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000`);
};

startServer();

module.exports = app;
