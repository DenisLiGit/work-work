import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import AllResults from '../../imgs/allResults.svg'

import './SubSlider.scss'
import { NavLink } from 'react-router-dom';
import { ApiStatic } from '../../Api/Api';

const SubSlider = () => {
  const [slides, setSlides] = useState([])

  useEffect(() => {
    setSlides(ApiStatic.getImages())
  }, []);

  const SampleArrow = (props) => {
    const { className, onClick } = props;

    return (
      <div
        className={`sliderArrow ${className}`}
        onClick={onClick}
      />
    )
  }

  const settings = {
    className: 'subSlider',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />
  };

  return (
    <div className="results">
      <div>
        <h3>Результаты работы портала</h3>
        <NavLink to="/allNews">
            Все результаты
            <img src={AllResults} alt=""/>
        </NavLink>
      </div>
      <Slider {...settings}>
        {slides.map((item, index) => {
          return (
            <div key={index}>
              <img src={item} alt="sider img"/>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SubSlider;
