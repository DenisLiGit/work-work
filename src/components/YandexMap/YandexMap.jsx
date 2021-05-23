import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import { NavLink } from 'react-router-dom';
import './YandexMap.scss'

const YandexMap = () => {
  return (
    <div className="yandexMapPage">
      <YMaps>
        <NavLink to="/citizen-message">Страница объекта</NavLink>
        <Map width="100%" height="100%" defaultState={{ center: [55.75, 37.57], zoom: 9 }}/>
      </YMaps>
    </div>
  );
};

export default YandexMap;
