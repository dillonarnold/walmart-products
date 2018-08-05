'use strict';
require('babel-polyfill');
const Code = require('code'); // assertion library for Lab
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const server = require('../src/server/server');

lab.experiment('General Endpoint Tests', () => {
  lab.test('GET / (default test)', async () => {
    const options = {
      url: '/',
      method: 'GET'
    };
    await server.inject(options);
  });

  lab.test('GET 404', async () => {
    const options = {
      url: '/api/abc',
      method: 'GET'
    };
    const response = await server.inject(options);
    Code.expect(response.statusCode).to.equal(404);
  });

  lab.test('GET product', async () => {
    const options = {
      url: '/api/product/14225185',
      method: 'GET'
    };
    await server.inject(options);
  });

  lab.test('GET product that does not exist', async () => {
    const options = {
      url: '/api/product/14',
      method: 'GET'
    };
    const response = await server.inject(options);
    Code.expect(response.statusCode).to.equal(500);
  });
});
