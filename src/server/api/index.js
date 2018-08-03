import { notFound } from './controllers/home';
import { get, search } from './controllers/product';

const api = {
  name: 'api',
  version: '1.0.0',
  register: async function (server, options) {
    server.route({
      method: 'GET',
      path: '/api/{path*}',
      config: notFound
    });

    server.route({
      method: 'GET',
      path: '/api/product/{id}',
      config: get
    });

    server.route({
      method: 'GET',
      path: '/api/product/search',
      config: search
    });
  }
};

export default api;
