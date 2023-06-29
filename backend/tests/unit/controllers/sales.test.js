const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const salesService = require('../../../src/services/sales.service');
const salesController = require('../../../src/controllers/sales.controller');
const mock = require('./mock/sales.mock');

describe('sales controller', function () { 
  afterEach(function () {
    sinon.restore();
  });

  it('deve retornar todas vendas', async function () {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'getAll').resolves(mock.getAll);

    await salesController.getAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mock.getAll);
  });

  it('deve retornar uma venda pelo ID', async function () {
    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);

    sinon.stub(salesService, 'getById').resolves(mock.getById);

    await salesController.getById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mock.getById);
  });

//   it('Procurar uma venda com id inexistente', async function () {
//     const req = { params: { id: 171 } };
//     const res = {};

//     res.status = sinon.stub().returns(res);
//     res.json = sinon.stub().returns(res);

//     sinon.stub(salesService, 'getById').resolves();

//     await salesController.findSaleById(req, res);

//     expect(res.status).to.have.been.calledWith(404);
//     expect(res.json).to.have.been.calledWith({ message: 'Sale not found' });
// });
 });