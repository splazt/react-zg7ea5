import React from 'react';
import './style.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { increase, decrease } from './index.js;

export default function App() {
  const plusNum = () => {};

  const minusNum = () => {};

  return (
    <div className="container">
      <h1>{`Count: ${1}`}</h1>
      <div>
        <button className="plusBtn" onClick={plusNum}>
          +
        </button>
        <button className="minusBtn" onClick={minusNum}>
          -
        </button>
      </div>
    </div>
  );
}
