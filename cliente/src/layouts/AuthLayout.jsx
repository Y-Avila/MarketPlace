
import Logo from 'components/Logo';
import React from 'react';
import { Link } from 'react-router-dom';

const AuthLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Link to='/'>
          <i/>
        </Link>
      </div>
      <div>
        <Logo />
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
