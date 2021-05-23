import React from 'react';
import './UserPage.scss';
import PageHeader from '../PageHeader/PageHeader';
import { Tabs } from 'antd';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import './UserPage.scss'
import ProblemReport from '../ProblemReport/ProblemReport';
import MyMessages from '../MyMessages/MyMessages';

const { TabPane } = Tabs;

const UserPage = () => {
  const callback = (key) => {
    if(key) {
      return true
    }
  };

  return (
    <div className="userPage">
      <PageHeader title="Личный кабинет"/>
      <div className="userPage__content">
        <Tabs onChange={callback} type="card">
          <TabPane tab="Личные данные" key="1">
            <PersonalInfo
              name="Иванов Иван Иванович"
              phone="+7 (978) 000-00-00"
              email="berry_marysa@mail.ru"
            />
          </TabPane>
          <TabPane tab="Сообщить о проблеме" key="2">
            <ProblemReport />
          </TabPane>
          <TabPane tab="Мои сообщения" key="3">
            <MyMessages />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default UserPage;
