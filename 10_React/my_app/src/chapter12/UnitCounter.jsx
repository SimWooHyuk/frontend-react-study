import React from 'react';
import { useState } from 'react';

function UnitCounter(props) {
  const {length, onLengthChange}= props;


  return (
    <>
      
      <button type='button' onClick={() => onLengthChange(Math.max(length -1, 0))}>-</button>
      <button type='button' onClick={() => onLengthChange(Math.max(length -10, 0))}>-10</button>
      <button type='button' onClick={() => onLengthChange(Math.max(length -100, 0))}>-100</button>
      <button type='button' onClick={() => onLengthChange(Math.max(length -1000, 0))}>-1000</button>
      {length}
      <button type='button' onClick={() => onLengthChange(length +1)}>+</button>
      <button type='button' onClick={() => onLengthChange(length +10)}>+10</button>
      <button type='button' onClick={() => onLengthChange(length +100)}>+100</button>
      <button type='button' onClick={() => onLengthChange(length +1000)}>+1000</button>
    </>
  );
}

export default UnitCounter;