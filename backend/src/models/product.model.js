const connection = require('./connections');

const getAll = async () => {
  const query = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return query;
};
const getById = async (id) => {
  const [[query]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id=?', 
    [id],
  );
  return query;
};
const create = async (name) => {
  const query = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [name],
  );
  return query;
};
const update = async (id, name, quantity) => {
  const query = await connection.execute(
    'UPDATE StoreManager.products SET name=?, quantity=? WHERE id=?',
    [name, quantity, id],
  );
  return query;
};
const exclude = async (id) => {
  const query = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id=?',
    [id],
  );
  if (query[0].affectedRows === 0) return null;

  return query;
};
module.exports = {
  getAll,
  getById,
  create,
  update,
  exclude,
};