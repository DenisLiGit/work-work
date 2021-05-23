import React from 'react';
import './NotificationRow.scss';
import { Typography } from 'antd';

const NotificationRow = (props) => {
  return (
    <div className="notificationRow">
      <Typography.Paragraph className="notificationRow__title">
        {Object.keys(props.info)[0]}
      </Typography.Paragraph>
      <Typography.Paragraph className="notificationRow__text">
        {Object.values(props.info)[0]}
      </Typography.Paragraph>
    </div>
  );
};

export default NotificationRow;
