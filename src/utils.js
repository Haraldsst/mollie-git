/* eslint-disable default-case */
export const getPaymentMethodName = id => {
  switch (id) {
    case 'ideal':
      return 'iDEAL';
    case 'creditcard':
      return 'Credit card';
    case 'paypal':
      return 'Paypal';
  }
};

export const formatDate = createdAt => {
  const date = new Date(createdAt)
  const formatedDate = {
    year:  date.getFullYear(),
    month:  date.toLocaleString('en-us', { month: 'short' }),
    dt:  date.getDate(),
    time:  date.toTimeString().split(' ')[0].split(':'),
  }
  return formatedDate
}

export const getCurrencySymbol = currency => {
  switch (currency) {
    case 'EUR':
      return '€';
  }
}
