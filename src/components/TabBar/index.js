import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Tab = ({ children, ...rest }) => (
  <li>
    <NavLink activeClassName="is-active" {...rest}>
      {children}
    </NavLink>
  </li>
);

const TabBar = ({ children }) => (
  <ul className="tab-bar">{children(Tab)}</ul>
);

export default TabBar;
