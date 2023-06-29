const productModel = require('../models/product.model');

const handleError = {
  notFound: { status: 404, message: 'Product not found' },
  notChange: { status: 400, message: 'Row not changed' },
};
const getAll = async () => {
  const products = await productModel.getAll();
  return products;
};
const getById = async (id) => {
  const product = await productModel.getById(id);
  if (!product) {
    throw handleError.notFound;
  }
  return product;
};
const create = async (name) => {
  const [product] = await productModel.create(name);
  const newProduct = {
    id: product.insertId,
    name,
  };
  return newProduct;
};
const update = async (id, name) => {
  await getById(id);
  await productModel.update(id, name);
  return { id, name };
};

const deleteItem = async (id) => {
  const product = await productModel.exclude(id);
  return product;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteItem,
};