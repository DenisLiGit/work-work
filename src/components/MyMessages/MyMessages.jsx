import React, { useEffect, useState } from 'react';
import './MyMessages.scss';
import { Typography } from 'antd';
import { ApiStatic } from '../../Api/Api';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';
import TabNotificationCollapse from '../TabNotificationCollapse/TabNotificationCollapse';

const MyMessages = () => {

  const [messages, setMessages] = useState({});

  useEffect(() => {
    setMessages(ApiStatic.getMyMessages());
  }, []);

  return (
    <>
      {!Object.keys(messages).length ?
        <LoaderSpinner/>
        :
        <div className="myMessages">
          <div className="myMessages__titles">
            <Typography.Text className="myMessages__titles__id">
              №
            </Typography.Text>
            <Typography.Text className="myMessages__titles__message-title">
              Сообщения гражданина
            </Typography.Text>
            <Typography.Text className="myMessages__titles__status">
              Состояние сообщения
            </Typography.Text>
            <Typography.Text className="myMessages__titles__date">
              Сообщение создано <br/>
              Последнее уведомление
            </Typography.Text>
          </div>
          {messages.messages.map((item, index) => {
            return <TabNotificationCollapse key={index} notification={item}/>;
          })}
        </div>
      }
    </>
  );
};

export default MyMessages;
