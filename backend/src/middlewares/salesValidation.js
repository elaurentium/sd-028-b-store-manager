const salesSchema = require('./schemas/schemas');

const salesValidation = (req, res, next) => {
  const products = req.body;
  const { error } = salesSchema.validate(products);

  if (error) {
    if (error.details[0].type === 'number.min') {
      return res.status(400).json({ message: error.message });
    }
    return res.status(422).json({ message: error.message });
  }
  next();
};

module.exports = salesValidation;