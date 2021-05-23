import React from 'react';
import useCollapse from 'react-collapsed';
import './NotificationCollapse.scss';
import { Typography } from 'antd';
import Title from 'antd/lib/typography/Title';
import NotificationRow from '../NotificationRow/NotificationRow';

const NotificationCollapse = (props) => {
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
    <div className="notificationCollapse">
      <div className={`notificationCollapse__header ${isExpanded ? 'openContent' : ''}`}>
        <div className="notificationCollapse__id">
          <Title level={4}>
            {props.notification.id}
          </Title>
        </div>
        <div className="notificationCollapse__status">
          <div className={`statusRound statusRound-${props.notification.status}`}></div>
          <Typography.Paragraph>
            {props.notification.statusDescription}
          </Typography.Paragraph>
        </div>
        <div className="notificationCollapse__date">
          {props.notification.date}
        </div>
        <div className="notificationCollapse__info">
          <button {...getToggleProps({ style: { display: 'block' } })}>
            {isExpanded ? 'Свернуть' : 'Подробнее'}
          </button>
        </div>
      </div>
      <div
        className="notificationCollapse__content"
        {...getCollapseProps({})}>
        {renderChildren && (
          <div className="notificationCollapse__box">
            {props.notification.description.map((item, index) => {
              return <NotificationRow
                key={index}
                info={item}
              />;
            })}
          </div>
        )}
      </div>

    </div>
  );
};

export default NotificationCollapse;
