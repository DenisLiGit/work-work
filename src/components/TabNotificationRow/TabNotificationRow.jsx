import React from 'react';
import './TabNotificationRow.scss';
import { Typography } from 'antd';
import InfoLabel from '../InfoLabel/InfoLabel';
import { Map, YMaps } from 'react-yandex-maps';
import DocumentBox from '../InfoLabel/DocumentBox/DocumentBox';

const TabNotificationRow = (props) => {
  return (
    <div className="tabNotificationRow">
      {Object.keys(props.info)[0] === 'files' && (
        <>
          <Typography.Paragraph className="tabNotificationRow__title">
            Прикреплённые документы:
          </Typography.Paragraph>
          <div className="tabNotificationRow__files">
            {Object.values(props.info)[0].map((item, index) => {
              return <DocumentBox file={item} key={index}/>;
            })}
          </div>

        </>
      )}

      {Object.keys(props.info)[0] === 'mapAddress' && (
        <>
          <Typography.Paragraph className="tabNotificationRow__title"/>
          <div className="tabNotificationRow__map">
            <YMaps>
              <Map width="100%" height="100%" defaultState={{ center: [55.75, 37.57], zoom: 9 }}/>
            </YMaps>
          </div>
        </>
      )}

      {Object.keys(props.info)[0] !== 'files' &&
      Object.keys(props.info)[0] !== 'mapAddress' ? (
        <>
          <Typography.Paragraph className="tabNotificationRow__title">
            {Object.keys(props.info)[0]}
          </Typography.Paragraph>
          <Typography.Paragraph className="tabNotificationRow__text">
            {Object.values(props.info)[0]}
          </Typography.Paragraph>
        </>
      ) : null}
    </div>
  );
};

export default TabNotificationRow;
