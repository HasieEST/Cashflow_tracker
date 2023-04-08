import React from 'react';

import Logout from './Logout';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={`${classes.header}`}>
      <h1>Tasklist</h1>
      <Logout onLogout={props.onLogout} />
    </header>
  );
};

export default Header;