import React from 'react';
import Title from 'antd/lib/typography/Title';
import './NotificationsList.scss';
import NotificationCollapse from '../NotificationCollapse/NotificationCollapse';
import { Typography } from 'antd';

const NotificationsList = (props) => {
  return (
    <div className="notificationsList">
      <Title level={3}>
        Список поступивших уведомлений
      </Title>
      <div className="notificationsList__list">
        <div className="notificationsList__list-titles">
          <Typography.Text>
            №
          </Typography.Text>
          <Typography.Text>
            Уведомление гражданину
          </Typography.Text>
          <Typography.Text>
            Дата создания уведомления
          </Typography.Text>
        </div>
        {props.notifications.map((item, index) => {
          return <NotificationCollapse key={index} notification={item}/>;
        })}
      </div>
    </div>
  );
};

export default NotificationsList;
