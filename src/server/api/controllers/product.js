import request from 'request-promise-native';
import Joi from 'joi';
import { productModel, productsModel } from '../models';
import { mapProducts, reduceProduct } from '../utils';

export const get = {
  description: 'Get meta data of a product',
  notes: 'Returns the meta data of a product using the product id',
  tags: ['api', 'product'],
  validate: {
    params: {
      id: Joi.number().required().description('the product id')
    }
  },
  response: { schema: productModel },
  handler: async (req, h) => {
    const id = req.params.id;

    const qs = {
      'format': 'json',
      'apiKey': 'kjybrqfdgp3u4yv2qzcnjndj' // TODO: move this to a central configuration
    };

    try {
      const response = await request.get({
        url: `http://api.walmartlabs.com/v1/items/${id}`,
        qs,
        resolveWithFullResponse: true,
        json: true
      });

      if (response.statusCode === 200) {
        // Reduce the properties of the product
        return reduceProduct(response.body);
      }
      else if (response.statusCode === 400) {
        // Pass error messages to client
        return h.response(response.body).code(400);
      }
      else {
        return h.response({
          errors: [{
            message: 'Unable to process your request'
          }]
        }).code(500);
      }
    } catch (e) {
      return h.response({
        // TODO: better error messages
        errors: [{
          message: 'Unable to process your request'
        }]
      }).code(500);
    }
  }
};

export const search = {
  description: 'Search products by query',
  notes: 'Returns a list of products returned by the Walmart API using the passed in query',
  tags: ['api', 'product'],
  validate: {
    query: {
      query: Joi.string().required().description('the query to search with'),
      start: Joi.number().default(1).description('product number to start with')
    }
  },
  response: { schema: productsModel },
  handler: async (req, h) => {
    if (!req.query.query) {
      // No search query
      return { message: 'No query given' };
    }

    // The request has query parameters named query and start to correspond to the Walmart API
    const query = req.query.query;
    const start = req.query.start;

    const qs = {
      'format': 'json',
      'apiKey': 'kjybrqfdgp3u4yv2qzcnjndj', // TODO: move this to a central configuration
      'query': query,
      'start': start,
      'numItems': 10 // Walmart API does not always seem to return only 10 results
    };

    try {
      const response = await request.get({
        url: 'http://api.walmartlabs.com/v1/search',
        qs,
        resolveWithFullResponse: true,
        json: true
      });

      if (response.statusCode === 200) {
        // Reduce the properties of each product in the array
        const products = mapProducts(response.body.items);
        return  {
          totalResults: response.body.totalResults,
          numProducts: response.body.numItems,
          products
        };
      }
      else if (response.statusCode === 400) {
        // Pass error messages to client
        return h.response(response.body).code(400);
      }
      else {
        return h.response({
          errors: [{
            message: 'Unable to process your request'
          }]
        }).code(500);
      }
    }
    catch (e) {
      return h.response({
        // TODO: better error messages
        errors: [{
          message: 'Unable to process your request'
        }]
      }).code(500);
    }
  }
};
