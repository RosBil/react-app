import React, { Fragment } from 'react';

import './Input.css';

export const Input = ({
  type,
  labelText,
  onChange,
  placeholder,
  onKeyPress,
  value,
  required,
  name,
}) => (
  <Fragment>
    <label> {labelText}</label>
    <input
      type={type}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      value={value}
      required={required}
      name={name}
    ></input>
  </Fragment>
);
