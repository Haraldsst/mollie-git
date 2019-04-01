import * as React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import api from '../../../services/api';

class Detail extends React.Component {
  render() {
    const { customer } = this.props;

    if (!customer) {
      return null;
    }

    return (
      <React.Fragment>
        <p>
          <Link to="/customers">Back to customers overview</Link>
        </p>
        <h1>{customer.name}</h1>
        <p>You can email this customer at {customer.email}.</p>
      </React.Fragment>
    );
  }
}

export default Detail;
