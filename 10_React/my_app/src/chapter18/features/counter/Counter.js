import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, incrementByDivide, incrementByMinus, incrementByMulti, incrementByPlus } from './counterSlice';

// 5. 리액트 컴포넌트에서 Redux Store와 Actions 사용하기
function Counter(props) {
  // Redux Store에 있는 state를 가져오는 함수
  const count = useSelector((state) => state.counter.value); // state만 리턴하면 전역 state 전부 가져옴

  // Redux Store에 요청을 보내주는 함수
  const dispatch = useDispatch();
const [incrementPlus, setIncrementPlus] = useState('2');
const [incrementMinus, setIncrementMinus] = useState('2');
const [incrementMulti, setIncrementMulti] = useState('2');
const [incrementDivide, setIncrementDivide] = useState('2');
const incrementPlusValue = Number(incrementPlus) || 0;
const incrementMinusValue = Number(incrementMinus) || 0;
const incrementMultiValue = Number(incrementMulti) || 0;
const incrementDevideValue = Number(incrementDivide) || 0;

  return (
    <>
      <div>
        <button
          type='button'
          // 전역 상태를 업데이트하는 유일한 방법
          // dispatch() 함수: 액션 객체를 스토어에 보냄
          // -> 스토어는 해당 액션에 매칭되는 리듀서 함수를 실행시켜서 새로운 상태를 만들어줌
          // decrement() 함수: 액션 (객체) 생성 함수
          // 함수 실행 결과:
          // {
          //   payload: undefined;
          //   type: "counter/decrement";
          // }
          onClick={() => dispatch(decrement())}
        >
          감소
        </button>
        <span>{count}</span>
        <button
          type='button'
          onClick={() => dispatch(increment())}
        >
          증가
        </button>

      </div>
      <div>
        <input 
        type='text'
        value={incrementPlus}
        onChange={(e) => setIncrementPlus(e.target.value)}
        />
      <button
        type='button'
        onClick={() => dispatch(incrementByPlus(incrementPlusValue))}
      >
        Add Amount
      </button>
      </div>
      <div>
        <input 
        type='text'
        value={incrementMinus}
        onChange={(e) => setIncrementMinus(e.target.value)}
        />
      <button
        type='button'
        onClick={() => dispatch(incrementByMinus(incrementMinusValue))}
      >
        Minus Amount
      </button>
      </div>
      <div>
        <input 
        type='text'
        value={incrementMulti}
        onChange={(e) => setIncrementMulti(e.target.value)}
        />
      <button
        type='button'
        onClick={() => dispatch(incrementByMulti(incrementMultiValue))}
      >
        Multi Amount
      </button>
      </div>
      <div>
        <input 
        type='text'
        value={incrementDivide}
        onChange={(e) => setIncrementDivide(e.target.value)}
        />
      <button
        type='button'
        onClick={() => dispatch(incrementByDivide(incrementDevideValue))}
      >
        Devide Amount
      </button>
      </div>
    </>
  );
}

export default Counter;