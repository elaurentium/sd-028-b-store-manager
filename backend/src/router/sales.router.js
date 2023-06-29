const { Router } = require('express');
const salesController = require('../controllers/sales.controller');
// const salesValidation = require('../middlewares/salesValidation');

const router = Router();

router
  .get('/', salesController.getAll)
  .get('/:id', salesController.getById);
  // .delete('/:id', salesController.deleteItem);

module.exports = router;