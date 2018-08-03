import { notFound } from './controllers/home';

const api = {
  name: 'api',
  version: '1.0.0',
  register: async function (server, options) {
    server.route({
      method: 'GET',
      path: '/api/{path*}',
      config: notFound
    });
  }
};

export default api;
