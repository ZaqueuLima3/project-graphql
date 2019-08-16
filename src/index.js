const { GraphQLServer } = require('graphql-yoga');
const { resolve } = require('path');
const resolvers = require('./app/resolvers');

const server = new GraphQLServer({
  typeDefs: resolve(__dirname, 'app', 'schema', 'index.graphql'),
  resolvers,
});

server.start(({ port }) => {
  console.log(`Run in http://localhost:${port}`);
});
