const saleService = require('../services/sales.service');

const getAll = async (_req, res) => {
  try {
    const sale = await saleService.getAll();
    return res.status(200).json(sale);
  } catch (error) {
    return res.status(404).json({ message: 'Sale not found' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const sale = await saleService.getById(id);
    return res.status(200).json(sale);
  } catch (error) {
    return res.status(404).json({ message: 'Sale not found' });
  }
};

module.exports = {
  getAll,
  getById,
};