const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

chai.use(chaiHttp);

const productService = require('../../../src/services/product.service');
const productController = require('../../../src/controllers/product.controller');
const mock = require('./mock/productController.mock');

describe('Product Controller', function () { 
  afterEach(function () { return sinon.restore(); });
  describe('getAll', function () { 
    it('deve retornar tudo', async function () {
      const res = {};
      const req = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productService, 'getAll').resolves(mock.getAll);

      await productController.getAll(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mock.getAll);
    });
    describe('getById', function () {
      it('deve retornar produto pelo id', async function () {
        const res = {};
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
        const req = {
          params: { id: 1 },
          body: {},
        };

        sinon.stub(productService, 'getById').resolves(mock.getById);

        await productController.getById(req, res);

        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith(mock.getById);
      });
      // it('não retorna item com id especifico', async function () {
      //   const res = {};
      //   const req = {
      //     params: { id: 999 },
      //     body: {},
      //   };
      //   res.status = sinon.stub().returns(res);
      //   res.json = sinon.stub().returns();

      //   sinon.stub(productService, 'getById').resolves();

      //   await productController.getById(req, res);

      //   expect(res.status).to.have.been.calledWith(404);
      //   expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
      // });
    });
    });
 });