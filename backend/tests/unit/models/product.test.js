const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connections');
const productModel = require('../../../src/models/product.model');
const mock = require('../mock/product.mock');

describe('products models', function () { 
  afterEach(function () { return sinon.restore(); });
  describe('função getAll', function () { 
    it('deve retornar todos os produtos', async function () {
      sinon.stub(connection, 'execute').resolves(mock.getAll);
      const result = await productModel.getAll();
      expect(result).to.be.deep.equal(mock.getAll);
    });
  });
  describe('função getById', function () { 
    it('deve retornar produto pelo id do produto', async function () {
      sinon.stub(connection, 'execute').resolves(mock.getById);
      const result = await productModel.getById(1);
      expect(result).to.be.an('object');
      expect(result).to.contain.keys(['id', 'name']);
    });
  });
  describe('create', function () { 
    it('cria um novo produto', async function () {
      sinon.stub(connection, 'execute').resolves(mock.create);
      
      const result = await productModel.create('produto');
      expect(result).to.deep.equal(mock.create);
    });
  });
  
  describe('update', function () {
    it('deve atualizar o produto com id', async function () {
      sinon.stub(connection, 'execute').resolves(mock.update);
      const result = await productModel.update(1, 'novo produto', 10);

      expect(result).to.deep.equal(mock.update);
    });
  });

  describe('exclude', function () { 
    it('deve deletar o produto com id especifico', async function () {
      sinon.stub(connection, 'execute').resolves(mock.exclude);

      const result = await productModel.exclude(1);

      expect(result).to.deep.equal(mock.exclude);
    });

    it('deve retornar null caso o id não exista', async function () {
      sinon.stub(connection, 'execute').resolves([{ affectedRows: 0 }]);
      const result = await productModel.exclude(1);
      expect(result).to.deep.equal(null);
    });
   });
 });