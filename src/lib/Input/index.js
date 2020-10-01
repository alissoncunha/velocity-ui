import React from 'react';

const Input = ({ type = 'text', label }) => (
  <div className="">
    <label>{label}</label>
    <input type={type} />
  </div>
);

export default Input;