const getAll = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

const getById = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
];

const create = [
  {
    insertId: 1,
  },
  null,
];

const update = [
  {
    affectedRows: 1,
  },
  null,
];

const exclude = [
  {
    affectedRows: 1,
  },
  null,
];

const serviceCreate = {
  id: 1,
  name: 'produto',
};

const search = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

const searchQ = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
];

module.exports = {
  getAll,
  getById,
  create,
  update,
  exclude,
  serviceCreate,
  search,
  searchQ,
};