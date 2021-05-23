import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import './About.scss';
import Slider from 'react-slick';
import { ApiStatic } from '../../Api/Api';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';
import PageHeader from '../PageHeader/PageHeader';

const About = () => {
  const [aboutInfo, setAboutInfo] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setAboutInfo(ApiStatic.getAboutPage());
    setLoader(false);
  }, []);

  const SampleArrow = (props) => {
    const { className, onClick } = props;

    return (
      <div
        className={`sliderArrow ${className}`}
        onClick={onClick}
      />
    );
  };

  const settings = {
    className: 'aboutSlider',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    nextArrow: <SampleArrow/>,
    prevArrow: <SampleArrow/>,
  };


  return (
    <>
      {loader ?
        <LoaderSpinner />
        :
      <div className="about">
        <PageHeader title={aboutInfo.title} />
        <div className="about__content">
          <div className="about__content-box">
            {aboutInfo.img &&
            <img className="about__content-poster" src={aboutInfo.img} alt="about"/>
            }
            <div className="about__content-text">
              {aboutInfo.paragraphsStart.map((item, index) => {
                return (
                  <Typography.Paragraph key={index}>
                    {item}
                  </Typography.Paragraph>
                );
              })}
            </div>
            <Slider {...settings}>
              {aboutInfo.urls.map((item, index) => {
                return (
                  <div key={index}>
                    <img src={item} alt="sider img"/>
                  </div>
                );
              })}
            </Slider>
            <div className="about__content-text">
              {aboutInfo.paragraphsEnd.map((item, index) => {
                return (
                  <Typography.Paragraph key={index}>
                    {item}
                  </Typography.Paragraph>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      }
    </>
  );
};

export default About;
