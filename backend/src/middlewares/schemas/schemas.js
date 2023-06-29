const Joi = require('joi');

const salesSchema = Joi.array().items(
  Joi.object({
    productId: Joi.number().required().messages({
      'any.required': '"productId" is required',
    }),
    quantity: Joi.number().required().min(1).messages({
      'any.required': '"quantity" is required',
      'number.min': '"quantity" must be greater than or equal to {#limit}',
    }),
  }),
);

module.exports = {
  salesSchema,
};