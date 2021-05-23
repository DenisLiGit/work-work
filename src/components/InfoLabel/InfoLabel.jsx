import React from 'react';
import { Typography } from 'antd';
import './InfoLabel.scss';
import DocumentBox from './DocumentBox/DocumentBox';

const { Title } = Typography;

const InfoLabel = (props) => {
  return (
    <div className="infoLabel">
      <Title className="infoLabel__title" level={4}>
        {props.title}
      </Title>
      {!props.files ?
        <Typography.Paragraph className="infoLabel__description">
          {props.description}
        </Typography.Paragraph>
        :
        props.files.map((item, index) => {
          return <DocumentBox file={item} key={index}/>;
        })
      }
    </div>
  );
};

export default InfoLabel;
