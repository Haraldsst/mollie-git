import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import TabBar from '../TabBar';
import Customers from '../../pages/Customers';
import Home from '../../pages/Home';
import Payments from '../../pages/Payments';
import store from '../../stores/payments'
import './style.scss';

const App = props => (
  <Provider store={store}>
    <Router>
      <div className="app">
        <TabBar>
          {Tab => (
            <React.Fragment>
              <Tab exact to="/">
                Home
              </Tab>
              <Tab to="/payments">Payments</Tab>
              <Tab to="/customers">Customers</Tab>
            </React.Fragment>
          )}
        </TabBar>
        <Route path="/" exact component={Home} />
        <Route path="/customers" component={Customers} />
        <Route path="/payments" component={Payments} />
      </div>
    </Router>
  </Provider>
);

export default App;
