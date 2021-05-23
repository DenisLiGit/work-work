import React from 'react';
import { Typography } from 'antd';
import './DocumentBox.scss';
import JPGImage from '../../../imgs/jpgIcon.png';
// import PNGImage from "../../../imgs/jpgIcon.png"

const DocumentBox = (props) => {
  let imageType;

  switch (props.file.type) {
    case 'jpg':
      imageType = JPGImage;
      break;
    // case 'png':
    //   imageType = PNGImage
    //   break;
    default:
      imageType = JPGImage;
  }

  return (
    <a href={props.file.url} target="_blank" rel="noreferrer">
      <div className='documentBox'>
        <img src={imageType} alt="jpg"/>
        <div>
          <Typography.Text className="documentBox__title">
            {props.file.title}
          </Typography.Text>
          <Typography.Text className="documentBox__description">
            {props.file.type}({props.file.weight})
          </Typography.Text>
        </div>
      </div>
    </a>

  );
};

export default DocumentBox;
