import { default as api} from './api';

const Hapi = require('hapi');

// Create the Hapi server
const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || 'localhost';
const server = new Hapi.Server({ host: HOST, port: PORT });

const init = async () => {

  await server.register([
    {
      plugin: require('h2o2')
    },
    {
      plugin: require('inert')
    },
    {
      plugin: require('vision')
    },
    {
      plugin: require('blipp')
    },
    {
      // Our API routes
      plugin: api
    }
  ]);

  // Serve up all static content in public folder
  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
      directory: {
        path: './public',
        listing: false,
        index: true
      }
    }
  });

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();

// For server inject in Lab tests
module.exports = server;
