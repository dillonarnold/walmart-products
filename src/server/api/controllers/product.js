import request from 'request-promise-native';
import Joi from 'joi';


export const get = {
  handler: async (req, h) => {
    const id = req.params.id;

    const qs = {
      'format': 'json',
      'apiKey': 'kjybrqfdgp3u4yv2qzcnjndj'
    };

    try {
      return await request.get({url: `http://api.walmartlabs.com/v1/items/${id}`, qs, json: true});
    } catch (e) {
    }
  },
  description: 'Get meta data of a product',
  notes: 'Returns the meta data of a product using the product id',
  tags: ['api', 'product'], // ADD THIS TAG
  validate: {
    params: {
      id: Joi.number().required().description('the product id')
    }
  }
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
      'apiKey': 'kjybrqfdgp3u4yv2qzcnjndj',
      'query': query
    };

    try {
      const response = await request.get({url: 'http://api.walmartlabs.com/v1/search', qs, json: true});
      return  {products: response.items };
    } catch (e) {
    }
  },
  description: 'Search products by query',
  notes: 'Returns a list of products returned by the Walmart API using the passed in query',
  tags: ['api', 'product'], // ADD THIS TAG
  validate: {
    query: {
      query: Joi.string().required().description('the query to search with')
    }
  }
};
