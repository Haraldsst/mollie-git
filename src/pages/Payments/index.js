import * as React from 'react';
import { Route } from 'react-router-dom';

import Detail from './Detail';
import Overview from './Overview';

const Payments = ({ match }) => (
  <React.Fragment>
    <Route path={match.path} exact component={Overview} />
    {/* <Route path={`${match.path}/:id`} exact component={Detail}  /> */}
    <Route path={`${match.path}/:id`} exact render={(props) => <Detail id={props.match.params.id} /> } />
  </React.Fragment>
);

export default Payments;
