const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { validateName } = require('../../../src/middlewares/productValidation');

const { expect } = chai;

chai.use(sinonChai);

describe('Middleware product validation', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('deve retornar um erro caso "name" não seja adicionado', async function () {
    const req = { body: { name: null } };
    const res = { status: sinon.stub().returnsThis(),
    json: sinon.stub() };
    const next = sinon.stub().returns();

    validateName(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"name" is required' });
  });
  it('deve retornar um erro caso "name" seja menor que 5', async function () {
    const req = { body: { name: 'aa' } };
    const res = { status: sinon.stub().returnsThis(),
    json: sinon.stub() };
    const next = sinon.stub().returns();

    validateName(req, res, next);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ 
      message: '"name" length must be at least 5 characters long', 
    });
  });
});