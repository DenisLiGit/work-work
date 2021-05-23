import React, { Suspense } from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';
import RegisterModal from '../Modals/RegisterModal';
import UserPage from '../UserPage/UserPage';
import PersonalArea from '../Modals/PersonalArea';

const { Content } = Layout;

const MainSlider = React.lazy(() => import('../MainBox/MainBox'));
const SubSlider = React.lazy(() => import('../SubSlider/SubSlider'));
const YandexMap = React.lazy(() => import('../YandexMap/YandexMap'));
const About = React.lazy(() => import('../About/About'));
const CitizenMessage = React.lazy(() => import('../CitizenMessage/CitizenMessage'));

const ContentBox = () => {
  return (
    <Content>
      <div className="site-layout-content">
        <Suspense fallback={<LoaderSpinner/>}>
          <Switch>
            <Route exact path="/">
              <MainSlider/>
              <SubSlider/>
            </Route>
            <Route exact path="/map">
              <YandexMap />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/citizen-message">
              <CitizenMessage />
            </Route>
            <Route exact path="/personal-area">
              <UserPage />
            </Route>
          </Switch>
        </Suspense>
      </div>
      <RegisterModal />
      <PersonalArea />
    </Content>
  );
};

export default ContentBox;
