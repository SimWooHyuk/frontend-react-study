import { useState } from "react";


function MyButton() {

  const handleDelete = (id) => {
    console.log(id + '삭제됨');

  }

  const handleDeleteWrong = (id, e) => {
    debugger;
    // e: 이벤트 객체(발생한 이벤트와 관련한 여러 기능이 담겨있음)
    // e.target: 현재 발생한 이벤트의 대상(여기서는 <button> DOM 객체)
    console.log(id + '삭제됨');
    console.log(e.target);
  }
  return (
    <div>
      {/* 잘못된 방법 */}
      {/* 단순하게 마운트 시 함수가 바로 실행됨 */}
      <button type="button" onClick={handleDelete(1)}>삭제하기(잘못된 방법)</button>
      <br /><br />
      {/* 매개변수 event로 들어오는 값은 event 객체임 */}
      {/* e, event 다 같음 */}
      <button type="button" onClick={event => handleDeleteWrong(1, event)}>삭제하기</button>
    </div>
  );
}

export default MyButton;