const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const mock = require('./mocks/productService.mock');
const productModel = require('../../../src/models/product.model');
const productService = require('../../../src/services/product.service');

chai.use(sinonChai);

describe('Product Services', function () {
  afterEach(function () { return sinon.restore(); });
  it('Deve retornar todos os produtos', async function () {
    sinon.stub(productModel, 'getAll').resolves(mock.getAll);

    const result = await productService.getAll();

    expect(result).to.be.deep.equal(mock.getAll);
    expect(result).to.be.an('array');
    expect(result[0]).to.contain.keys(['id', 'name']);
    expect(result).to.have.length(3);
  });

  it('Deve retornar o produto de acordo com o ID', async function () {
    sinon.stub(productModel, 'getById').resolves(mock.getById);

    const result = await productService.getById(1);

    expect(result).to.be.deep.equal(mock.getById);
  });

  it('Deve devolver o produto cadastrado com ID', async function () {
    sinon.stub(productModel, 'create').resolves(mock.create);
    const expected = {
      id: 1,
      name: 'produto',
    };

    const result = await productService.create('produto');
    expect(result).to.be.deep.equal(expected);
  });

  // it('Deve devolver as informações do produto atualizado', async () => {
  //   const updatedProduct = {
  //     id: 1,
  //     name: 'produto'
  //   };

  //   sinon.stub(productModel, 'update').resolves(mock.update);

  //   const result = await productService.update(1, 'produto');

  //   expect(result).to.be.deep.equal(updatedProduct);
  // })

  // it('Deve devolver as linhas afetadas após o DELETE', async () => {
  //   sinon.stub(productModel, 'exclude').resolves(mock.deleteItem);

  //   const result = await productService.deleteItem(1);

  //   expect(result[0].affectedRows).to.be.equal(1);
  // })
});