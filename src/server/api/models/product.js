import Joi from 'joi';

export const productModel = Joi.object({
  itemId: Joi.number(),
  name: Joi.string(),
  mediumImage: Joi.string()
});

export const productsModel = Joi.object({
  totalResults: Joi.number(),
  numProducts: Joi.number(),
  products: Joi.array().items(productModel)
});
