import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import './FooterBox.scss';
import LogoFooter from '../../imgs/LogoFooter.svg';
import { Typography } from 'antd';
import { useHistory } from 'react-router-dom';

const { Footer } = Layout;

const FooterBox = () => {
  const history = useHistory();
  const curentPage = window.location.pathname === '/map' ? 'ant-layout-footer__hide' : '';
  const [footerStyle, setFooterStyle] = useState(curentPage);

  useEffect(() => {
    return history.listen((location) => {
      setFooterStyle(
        location.pathname === '/map' ? 'ant-layout-footer__hide' : '');
    });
  }, [history]);

  return (
    <Footer className={footerStyle}>
      <div>
        <Typography.Paragraph>
          Разработано при поддержке Министерства внутренней политики,<br/>
          информации и связи Республики Крым
        </Typography.Paragraph>
        <img src={LogoFooter} alt="logo"/>
      </div>
    </Footer>
  );
};

export default FooterBox;
