import Hapi from 'hapi';
import { default as api} from './api';

// Create the Hapi server
const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || 'localhost';
const server = new Hapi.Server({ host: HOST, port: PORT });

const init = async () => {

  await server.register([
    require('h2o2'),
    require('inert'),
    require('vision'),
    require('blipp'),
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
