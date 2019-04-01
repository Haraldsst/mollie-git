import api from '../index.js';
import payments from '../data/payments';
import customers from '../data/customers';

describe('api', () => {
  it('returns a list of payments', async () => {
    const result = await api.get('/payments');

    expect(result).toEqual(payments);
  });

  it('returns a specific payment', async () => {
    const result = await api.get(`/payments/${payments[1].id}`);

    expect(result).toEqual(payments[1]);
  });

  it('returns a list of customers', async () => {
    const result = await api.get('/customers');

    expect(result).toEqual(customers);
  });

  it('returns a specific customer', async () => {
    const result = await api.get(`/customers/${customers[1].id}`);

    expect(result).toEqual(customers[1]);
  });
});
