import React, { useState } from 'react';
import './RegularInput.scss';
import Text from 'antd/lib/typography/Text';
import InputMask from 'react-input-mask';

import passEyeOpen from '../../imgs/passEyeOpen.png';
import PassEyeClose from '../../imgs/passEyeClose.svg';

const RegularInput = (props) => {
  const [eye, setEye] = useState(true);

  const passEyeControl = () => {
    setEye(!eye);
  };

  return (
    <div className={`customInputWrap ${props.width}`}>
      <label title={props.label}>
        {props.label}
        {props.required && <span>*</span>}
      </label>
      {!props.mask ?
        <input
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          className="customInput"
          placeholder={props.placeholder}
          type={eye ? props.type : 'text' }
          disabled={props.status === 'disabled'}
        />
        :
        <InputMask
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          className="customInput"
          mask={props.mask}
          alwaysShowMask={true}
          placeholder={props.placeholder}
          disabled={props.status === 'disabled'}
        />
      }
      {props.error &&
      <Text className="customInputWrap__error" type="danger">
        {props.error}
      </Text>
      }
      {props.type === 'password' &&
      <div className="passwordEye" onClick={passEyeControl}>
        {eye ?
          <img src={passEyeOpen} alt="hide pass"/>
          :
          <img src={PassEyeClose} alt="show pass"/>
        }
      </div>
      }
    </div>
  );
};

export default RegularInput;
