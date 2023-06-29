const productService = require('../services/product.service');

const getAll = async (_req, res) => {
  try {
    const products = await productService.getAll();
    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.getById(id);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(404).json({ message: 'Product not found' });
  }
};

const create = async (req, res) => {
  try {
    const { name } = req.body;
    const product = await productService.create(name);
    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const product = await productService.update(id, name);
    return res.status(200).json(product);
  } catch (error) {
    return next(error);
  }
};

const deleteItem = async (req, res) => {
  const { id } = req.params;
  const product = await productService.deleteItem(id);

  if (!product) return res.status(404).json({ message: 'Product not found' });

  res.status(204).json(product);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteItem,
};