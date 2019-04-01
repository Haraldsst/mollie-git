/*
 * Mock API
 * Code in this file should not be changed
 */
import customers from './data/customers';
import payments from './data/payments';

const getData = url => {
  if (url === '/payments') {
    return payments;
  }

  if (url.startsWith('/payments/')) {
    const id = url.replace('/payments/', '');
    return payments.find(payment => payment.id === id);
  }

  if (url === '/customers') {
    return customers;
  }

  if (url.startsWith('/customers/')) {
    const id = url.replace('/customers/', '');
    return customers.find(customer => customer.id === id);
  }

  return {
    error: 'Unknown endpoint',
  };
};

class Api {
  get(url, options) {
    return new Promise(resolve => {
      setTimeout(resolve(getData(url, options)), 500);
    });
  }
}

export default new Api();
