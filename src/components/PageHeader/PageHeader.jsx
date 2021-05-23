import React from 'react';
import './PageHeader.scss'
import { Breadcrumb } from 'antd';
import Title from 'antd/lib/typography/Title';

const PageHeader = (props) => {
  return (
    <div className="pageHeader">
      <div className="pageHeader-box">
        <Breadcrumb separator=">" style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>О проекте</Breadcrumb.Item>
          {/*<Breadcrumb.Item>App</Breadcrumb.Item>*/}
        </Breadcrumb>
        {props.title &&
        <Title level={2}>
          {props.title}
        </Title>
        }
      </div>
    </div>
  );
};

export default PageHeader;
