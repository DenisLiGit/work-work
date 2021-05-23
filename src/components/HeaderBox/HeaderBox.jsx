import React, { useContext, useEffect, useState } from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import MainLogo from '../MainLogo/MainLogo';
import './HeaderBox.scss';
import Union from '../../imgs/Union.svg';
import { observer } from 'mobx-react';
import { modalContext } from '../../App';
import { useHistory } from 'react-router-dom';

const HeaderBox = observer(() => {
  const history = useHistory();
  const modalStore = useContext(modalContext);
  const headerPage = window.location.pathname === '/' ? '' : 'HeaderBox__page';
  const [panelStyle, setPanelStyle] = useState(headerPage);

  const loginModal = () => {
    modalStore.setLoginModal(true);
  };

  useEffect(() => {
    return history.listen((location) => {
      setPanelStyle(
        location.pathname === '/' ? '' : 'HeaderBox__page');
    });
  }, [history]);

  return (
    <header className={`HeaderBox ${panelStyle}`}>
      <div>
        <MainLogo/>
        <Menu theme="light" mode="horizontal">
          <Menu.Item key="1">
            <NavLink to="/">Главная</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/map">Карта</NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/about">О проекте</NavLink>
          </Menu.Item>
        </Menu>
      </div>
      <div>
        <button className="problemReport" onClick={loginModal}>Сообщить о проблеме</button>
        <button className="userInfo">
          <NavLink to="/personal-area">
            <div className="userInfo__icon"/>
            Личный кабинет
          </NavLink>
        </button>
        <div className="headerDivider"/>
        <button className="login">
          <img src={Union} alt=""/>
        </button>
      </div>
    </header>
  );
});

export default HeaderBox;
