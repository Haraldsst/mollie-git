import * as React from 'react';
import { Link } from 'react-router-dom';
import Table from '../../../components/Table';
import { connect } from 'react-redux';
import { fetchPayments } from '../../../actions/paymentActions'
import './style.scss';

// eslint-disable-next-line no-unused-vars
import api from '../../../services/api';

/*
 * NOTE:
 * You can use api.get(`/payments`) to fetch all payments. The API will return a promise.
 */
 
class Overview extends React.Component {

  componentDidMount() {
    this.props.fetchPayments()
    console.log(this.props)
  }

  render() {
    return (
      <div className="table">
          <div className="header">
              <span></span>
              <span>Amount</span>
              <span>Status</span>
              <span>Details</span>
              <span>Date</span>
          </div>
          {this.props.payments.map(entry => 
            <Link key={entry.id} to={`/payments/${entry.id}`}>
              <Table  payment={entry} />
            </Link>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  payments: state.paymentsList.payments
})

export default connect(mapStateToProps, {fetchPayments})(Overview);
