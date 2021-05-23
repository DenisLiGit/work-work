import React from 'react';
import { Select } from 'formik-antd';

const ProblemReportSelect = (props) => {
  return (
    <>
      <label>
        {props.title}
      </label>
      <Select
        name={props.name}
        placeholder="Выберите из списка"
      >
        {props.category.map((item, index) => {
          return <Select.Option
            key={index}
            value={item}>
            {item}
          </Select.Option>;
        })}
      </Select>
    </>
  );
};

export default ProblemReportSelect;
