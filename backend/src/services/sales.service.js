const saleModel = require('../models/sales.model');
// const checkArray = require('../utils/checkArray');

const handleError = {
  notFound: { status: 404, message: 'Sale not found' },
};

const getAll = async () => {
  const sale = await saleModel.getAll();

  // console.log(sale);
  
  const treatedSale = sale.map((e) => ({
    saleId: e.sale_id,
    date: e.date,
    productId: e.product_id,
    quantity: e.quantity,
  }));

  // console.log(treatedSale);

  return treatedSale;
};

const getById = async (id) => {
  // console.log(id);
  const sale = await saleModel.getById(id);

  if (!sale) {
    throw handleError.notFound;
  }

  const treatedSale = sale.map((e) => ({
    id: e.id,
    saleId: e.sale_id,
  }));

  return treatedSale;
};

const create = async (name) => {
  const [sale] = await saleModel.create(name);
  const newSale = {
    id: sale.insertId,
    name,
  };

  return newSale;
};

const deleteItem = async (id) => {
  const sale = await saleModel.exclude(id);
  return sale;
};

module.exports = {
  getAll,
  getById,
  create,
  deleteItem,
};