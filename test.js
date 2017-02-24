require('dotenv').config();
process.env.ORDERS_AMOUNT = 2;

const nock = require('nock');

describe('Test ms happy flow', () => {


    it('should send specified mount of orders', (done) => {

        nock(process.env.ORDERS_ENDPOINT).post('').reply(201, {});


    });

});