import * as React from 'react';
import { Link } from 'react-router-dom';
import PaymentMethodIcon from '../../../components/PaymentMethodIcon';
import { getPaymentMethodName } from '../../../utils';
import { connect } from 'react-redux';
import { fetchSinglePayment } from '../../../actions/paymentActions'
import './style.scss';

// eslint-disable-next-line no-unused-vars
import api from '../../../services/api';

class Detail extends React.Component {

  componentDidMount() {
    this.props.fetchSinglePayment(this.props.id)
  }

  render() {
    console.log('this.props')
    console.log(this.props)
    const payment = this.props ? this.props.payment.find(x => x.id === this.props.id) : undefined;
    

    if (!payment) {
      return "Cannot find payment or customer";
    }

    return (
      <React.Fragment>
        <p>
          <Link to="/payments">Back to payments overview</Link>
        </p>
        <h1 className="title">{payment.description}</h1>
        <p className="amount h2">
          {payment.amount.currency} {payment.amount.value}
        </p>
        <div className="data-container">
          <dl>
            <dt>Created at</dt>
            <dd>{payment.createdAt}</dd>
            <dt>Status</dt>
            <dd>{payment.status}</dd>
            <dt>Method</dt>
            <dd>
              <PaymentMethodIcon id={payment.method} />{' '}
              {getPaymentMethodName(payment.method)}
            </dd>
          </dl>
        </div>
        <div className="data-container">
          <dl>
            <dt>Name</dt>
            <dd>{payment.customer.name}</dd>
            <dt>Company</dt>
            <dd>{payment.customer.company}</dd>
            <dt>Email</dt>
            <dd>{payment.customer.email}</dd>
          </dl>
          <p className="read-more">
            <Link to={`/customers/${payment.customer.id}`}>View customer details</Link>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToPorps = state => ({
  payment: state.paymentsList.payment
})

export default connect(mapStateToPorps, {fetchSinglePayment})(Detail);
