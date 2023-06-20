import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement } from './counterSlice';

// 5. 리액트 컴포넌트에서 Redux Store와 Actions 사용하기
function Counter(props) {
  // Redux Store에 있는 state 를 가져오는 함수
  // useSelector((state) => state); // state만 리턴하면 전역 state 전부 가져옴
  const count = useSelector((state) => state.Counter.value);

  // Redux Store에 요청을 보내주는 함수
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <button
          type='button'
          // 전역 상태를 업데이트하는 유일한 방법
          // dispatch() 함수: 액션 객체를 스토어에 보냄
          // -> 스토어는 해당 액션에 매칭되는 리듀서 함수를 실행시켜서 새로운 상태를 만들어줌
          // decrement() 함수: 액션(객체) 생성 함수
          // 함수 실행 결과:
          //  {
          // payload: undefined;
          // type: "counter/decrement"
          // }
          onClick={() => dispatch(decrement())}
        >
          감소
        </button>
        <span>{count}</span>
        <button
          type='button'
          onClick={() => dispatch(decrement())}

        >
          증가
        </button>
      </div>
    </>
  );
}

export default Counter;