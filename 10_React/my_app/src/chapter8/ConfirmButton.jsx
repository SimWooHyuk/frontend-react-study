// 사용자에게 확인을 요구하는 버튼 컴포넌트

import { useState } from "react";

function ConfirmButton() {
  const [isConfirmed, setIsConfirmed] = useState(false)
  // const handleConfirm = () => {
  //   setIsConfirmed(!isConfirmed)
  // } // 비동기함수
  const handleConfirm = () => {
    setIsConfirmed(isConfirmed => !isConfirmed);
  }; // 동기함수
  
  return (
    <button type="button" onClick={handleConfirm} disabled={isConfirmed}>{isConfirmed ? '확인하기' : '확인됨'}</button> 
  );
  }


export default ConfirmButton;

// Quiz: 버튼을 누르면 '확인하기'가 '확인됨'으로 변경되면서 버튼 비활성화 처리 해보기
// 무엇을 해야할까?
// isConfirmed 라는 state 만들기
// 2) 버튼을 클릭하면 isConfirmed 상태를 바꾸는 handleConfirm 이벤트 핸들러(함수) 만들기
// 3) 조건부 핸들링(삼항 연산자)으로 버튼의 내용을 '확인하기' -> '확인됨'으로 바꾸기
// 4) 버튼 비활성화 처리