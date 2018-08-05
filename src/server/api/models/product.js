import Joi from 'joi';

export const productModel = Joi.object({
  itemId: Joi.number(),
  name: Joi.string(),
  mediumImage: Joi.string()
});

export const productsModel = Joi.object({
  products: Joi.array().items(productModel)
});
