import React from 'react';
import Logo from '../../imgs/mainlogo.svg';
import './MainLogo.scss';
import { NavLink } from 'react-router-dom';

const MyComponent = () => {
  return (
    <div className="mainLogo">
      <NavLink to="/">
        <img src={Logo} alt="logo"/>
        <h2>Наш город</h2>
      </NavLink>
    </div>

  );
};

export default MyComponent;
