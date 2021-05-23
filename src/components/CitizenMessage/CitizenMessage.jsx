import React, { useEffect, useState } from 'react';
import { Map, YMaps } from 'react-yandex-maps';
import { ApiStatic } from '../../Api/Api';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';
import './CitizenMessage.scss';
import InfoLabel from '../InfoLabel/InfoLabel';
import NotificationsList from '../NotificationsList/NotificationsList';
import { NavLink } from 'react-router-dom';
import PageHeader from '../PageHeader/PageHeader';

const CitizenMessage = () => {
  const [message, setMessage] = useState({});

  useEffect(() => {
    setMessage(ApiStatic.getCitizenMessage());
  }, []);

  return (
    <>
      {!Object.keys(message).length ?
        <LoaderSpinner/>
        :
        <div className="objectPage">
          <PageHeader title={message.title}/>
          <div className="objectPage__content">
            <div className="objectPage__content-box">
              <div className="objectPage__map-wrapper">
                <YMaps>
                  <Map width="100%" height="100%" defaultState={{ center: [55.75, 37.57], zoom: 9 }}/>
                </YMaps>
              </div>
              <div className="about__content-text">
                <InfoLabel title="Адрес" description={message.adress}/>
                <InfoLabel title="Описание" description={message.description}/>
                <InfoLabel title="Прикреплённые документы" files={message.files}/>
                <InfoLabel title="Категория" description={message.category}/>
                <InfoLabel title="Адресат" description={message.adresser}/>
                <InfoLabel title="Автор обращения" description={message.autor}/>
              </div>
              <NotificationsList notifications={message.notifications}/>
              <NavLink className="objectPage__return" to="/map">Назад к карте</NavLink>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default CitizenMessage;
