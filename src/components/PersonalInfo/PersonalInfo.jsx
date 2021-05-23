import React from 'react';
import './PersonalInfo.scss';
import Title from 'antd/lib/typography/Title';
import { Typography } from 'antd';

const PersonalInfo = (props) => {
  return (
    <div className='personalInfo'>
      <Title className='personalInfo__title' level={2}>
        {props.name}
      </Title>
      <Typography.Text className='personalInfo__subtitle'>
        Информация
      </Typography.Text>
      <div className='personalInfo__info'>
        <label>Телефон</label>
        <div>
          {props.phone}
        </div>
      </div>
      <div className='personalInfo__info'>
        <label>Электронная почта</label>
        <div>
          {props.email}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
