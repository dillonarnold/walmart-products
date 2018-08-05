import request from 'request-promise-native';
import Joi from 'joi';
import { productModel, productsModel } from '../models';
import { mapProducts, reduceProduct } from '../utils';

export const get = {
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
        console.log(response.body.item);
        const product = reduceProduct(response.body);
        return  product;
      }
      else {
        return h.response({
          // TODO: better error messages like 422 for productId that couldn't be found
          message: 'Unable to process your request'
        }).code(500);
      }
    } catch (e) {
      return h.response({
        // TODO: better error messages
        message: 'Unable to process your request'
      }).code(500);
    }
  },
  description: 'Get meta data of a product',
  notes: 'Returns the meta data of a product using the product id',
  tags: ['api', 'product'],
  validate: {
    params: {
      id: Joi.number().required().description('the product id')
    }
  },
  response: { schema: productModel }
};

export const search = {
  handler: async (req, h) => {
    if (!req.query.query) {
      // No search query
      return { message: 'No query given' };
    }

    // The request has a query parameter named query to correspond to the Walmart API
    const query = req.query.query;

    const qs = {
      'format': 'json',
      'apiKey': 'kjybrqfdgp3u4yv2qzcnjndj', // TODO: move this to a central configuration
      'query': query
    };

    try {
      const response = await request.get({
        url: 'http://api.walmartlabs.com/v1/search',
        qs,
        resolveWithFullResponse: true,
        json: true
      });

      if (response.statusCode === 200) {
        const products = mapProducts(response.body.items);
        console.log(products);
        return  { products };
      }
      else {
        return h.response({
          // TODO: better error messages
          message: 'Unable to process your request'
        }).code(500);
      }
    }
    catch (e) {
      return h.response({
        // TODO: better error messages
        message: 'Unable to process your request'
      }).code(500);
    }
  },
  description: 'Search products by query',
  notes: 'Returns a list of products returned by the Walmart API using the passed in query',
  tags: ['api', 'product'],
  validate: {
    query: {
      query: Joi.string().required().description('the query to search with')
    }
  },
  response: { schema: productsModel }
};
