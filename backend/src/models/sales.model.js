const connection = require('./connections');

const getAll = async () => {
  const [query] = await connection.execute(
    `SELECT * FROM StoreManager.sales_products AS sp 
    JOIN StoreManager.sales AS s ON sp.sale_id = s.id`,
  );
  // console.log(query);
  return query;
};

const getById = async (id) => {
  // console.log(id);
  const [[query]] = await connection.execute(
    `SELECT * FROM StoreManager.sales_products AS sp 
    JOIN StoreManager.sales AS s ON sp.sale_id = s.id WHERE id=?`,
    [id],
  );
    // console.log(query);
  return query;
};

const create = async (name) => {
  const query = await connection.execute(
    'INSERT INTO StoreManager.sales_products (name) VALUES (?)',
    [name],
  );
  return query;
};

const deleteItem = async (id) => {
  const query = await connection.execute(
    'DELETE FROM StoreManager.sales_products WHERE id=',
    [id],
  );
  if (query[0].affectedRows === 0) return null;

  return query;
};

module.exports = {
  getAll,
  getById,
  create,
  deleteItem,
};