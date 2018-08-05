import request from 'request-promise-native';

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
  }
};
