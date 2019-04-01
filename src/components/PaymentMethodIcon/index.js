import React from 'react';
import { ReactComponent as IconIdeal } from '../../assets/icons/ideal.svg';
import { ReactComponent as IconCreditCard } from '../../assets/icons/creditcard.svg';
import { ReactComponent as IconPaypal } from '../../assets/icons/paypal.svg';

const PaymentMethodIcon = ({ id }) => {
  if (id === 'ideal') {
    return <IconIdeal />;
  }

  if (id === 'creditcard') {
    return <IconCreditCard />;
  }

  if (id === 'paypal') {
    return <IconPaypal />;
  }

  return null;
};

export default PaymentMethodIcon;
