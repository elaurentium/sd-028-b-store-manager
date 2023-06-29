const { Router } = require('express');

const product = require('../controllers/product.controller');

const productValidator = require('../middlewares/productValidation');

const router = Router();

router
  .get('/', product.getAll)
  .get('/:id', product.getById)
  .post('/', productValidator.validateName, product.create)
  .delete('/:id', product.deleteItem);

module.exports = router;