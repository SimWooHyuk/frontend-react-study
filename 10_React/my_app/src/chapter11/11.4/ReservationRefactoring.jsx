import React, { useState } from 'react';

function ReservationRefactoring(props) {
  // 만약 여러 개의 state가 서로 관련이 있는 데이터라면 객체 형태로 묶어서 관리 가능
  // input에 name 속성을 설정하고 이벤트가 발생했을 때 이 값을 참조하여 객체 접근
  const [inputs, setInputs] = useState({
    breakfast: false,
    numberOfGuests: 2
});
const { breakfast, numberOfGuests } = inputs; // ES6차 구조 분해 할당을 통해 값 추출

  const handleInputChange = (e) => {
    const {type, name, checked, value} = e.target; // 현제 이벤트가 발생한 대상
    // console.log(type, name, checked, value);
    const inputValue = type === 'checked' ? checked : value;
    console.log(name, inputValue);

    // 중요!!
    // React 상태에서 객체를 수정해야 할 때에는,
    // 아래와 같이 기준 상태를 직접 수정해서 set함수에 넣으면 안됨
    // (inputs가 가리키는 객체의 내부 데이터만 바뀐것이지 참조값은 변하지 않았기 때문)
    // inputs[name] = inputValue; // x
    // setInputs(inputs); // x
    // console.log(setInputs(inputs)); // set함수를 써도 재렌더링 발생 안함 (리액트가 객체가 바뀐것을 감지하지 못함)

    // 그 대신 새로운 객체를 만들어서 새로운 객체에 변화를 주고 이를 상태롤 사용해야함
    // 이러한 작업을 "불변성을 지킨다" 라고 부름
    // 불변성을 지켜주어야만 리액트 컴포넌트에서 상태가 업데이트 됐음을 감지할 수 있고 이에 따라 재렌더링이 진행됨
    // const copyInput = {
    //   ...inputs
    // };                                // O
    // copyInput[name] = inputValue;
    // setInputs(copyInput);
    // 결론: React에서 객체를 업데이트 할 때에는 기존 객체를 직접 수정하면 안되고
    // 새로운 객체(기존 객체의 복사본 )를 만들어서 그 객체에 변화를 주고 마지막으로 set함수에 넣어줘야 함

    // 코드 간소화 버젼
    setInputs(prevInputs => ({
      ...prevInputs, // 기존의 inputs 객체를 복사한 뒤
      [name]: inputValue // name 값을 키로 갖는 속성의 값을 inputValue로 설정
    }))
  }


  const handleSubmit = (e) => {
    alert(`조식 여부: ${breakfast}. 투숙객수: ${numberOfGuests} `);
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        조식여부:
        <input 
        type="checkbox"
        name={breakfast} // name 속성 추가
        // checked 속성은 checkbox랑 radio 타입에 존재하고 boolean 값
        checked={breakfast}
        onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        투숙객 수:
        <input 
        type="number" 
        name="numberOfGuests" // name 속성 추가
        value={numberOfGuests}
        onChange={handleInputChange}/>
      </label>

    </form>
  );
}


export default ReservationRefactoring;