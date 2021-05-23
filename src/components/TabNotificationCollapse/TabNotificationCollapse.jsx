import React from 'react';
import useCollapse from 'react-collapsed';
import './TabNotificationCollapse.scss';
import { Typography } from 'antd';
import Title from 'antd/lib/typography/Title';
import TabNotificationRow from '../TabNotificationRow/TabNotificationRow';
import NotificationsList from '../NotificationsList/NotificationsList';

const TabNotificationCollapse = (props) => {
  const [renderChildren, setRenderChildren] = React.useState(false);

  const { getToggleProps, getCollapseProps, isExpanded } = useCollapse({
    defaultExpanded: false,
    onExpandStart() {
      setRenderChildren(true);
    },
    onCollapseEnd() {
      setRenderChildren(false);
    },
  });

  return (
    <div className={`tabNotificationCollapse ${isExpanded ? 'openContent' : ''}`}>
      <div className="tabNotificationCollapse__header">
        <div className="tabNotificationCollapse__id">
          <Title level={4}>
            {props.notification.id}
          </Title>
        </div>
        <div className="tabNotificationCollapse__message-title">
          <Typography.Paragraph>
            {props.notification.messageTitle}
          </Typography.Paragraph>
        </div>
        <div className="tabNotificationCollapse__status">
          <div className={`statusRound statusRound-${props.notification.status}`}></div>
          <Typography.Paragraph>
            {props.notification.statusDescription}
          </Typography.Paragraph>
        </div>
        <div className="tabNotificationCollapse__date">
          <Typography.Paragraph>
            {props.notification.createDate}
          </Typography.Paragraph>
          <Typography.Paragraph>
            {props.notification.lastDate}
          </Typography.Paragraph>
        </div>
        <div className="tabNotificationCollapse__info">
          <button {...getToggleProps({ style: { display: 'block' } })}>
            {isExpanded ? 'Свернуть' : 'Подробнее'}
          </button>
        </div>
      </div>
      <div
        className="tabNotificationCollapse__content"
        {...getCollapseProps({})}>
        {renderChildren && (
          <div className="tabNotificationCollapse__box">
            {props.notification.description.map((item, index) => {
              return <TabNotificationRow
                key={index}
                info={item}
              />;
            })}
            <NotificationsList notifications={props.notification.citizenMessage.notifications}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabNotificationCollapse;
