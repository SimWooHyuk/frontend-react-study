import { useState } from "react";

const MAX_COUNT = 10;
function Counter(props) {
  // state를 사용해서 값이 바뀔때마다 재랜더링이 되도록 해야함
  let [count, setCount] = useState(0); // 초기값 0
  console.log(useState(0));
// userState()의 결과로 배열이 반환됨 -> [초기값, set함수]
// 배열의 구조 분해 할당을 사용하여 변수 선언 및 할당

// (참고) ES5
// const arr = useState(0);
// const cnt = arr[0];
// const setCnt = arr[1];

// 만약 state 미사용 시
// 이런 식은 카운트 값을 증가시킬 수는 있지만, 재렌더링이 일어나지 않음
  let wrongCount = 0;

  // Quiz: 글자색 바꾸기, 버튼 내용 바꾸기
  const [color, setColor] = useState('black')
  const [text, setText] = useState('신청')
  const [finish, setFinish] = useState(false)
  const [end] = useState('마감')
  return (
    <div>
      {/* 1. state 사용 */}

      <p>총 {count}번 클릭했습니다.</p>
      <button type="button" onClick={()=>setCount(count + 1 )}>클릭</button>

      {/* 10번 눌렀을때 더이상 숫자가 안오름 */}
      <p>총 {count}번 클릭했습니다.</p>
      <button type="button" onClick={()=> {
        if (count < MAX_COUNT) {
          setCount(count + 1);
        }
      }}>클릭</button>
      {/* 2. state 직접 수정 */}
      {/* 직접 Count state를 증가시키면 값은 증가되지만 재렌더링이 일어나지 않음 */}
      <p>총 {count}번 클릭했습니다.</p>
      <button type="button" onClick={()=>count++}>클릭(잘못된방법)</button>

      <p>총 {wrongCount}번 클릭했습니다.</p>
      <button type="button" onClick={()=>{
        wrongCount++;
        console.log(wrongCount)
        ;}}>클릭(잘못된방법)</button>

        {/* Quiz: 글자색 바꾸기 */}
        <p style={{ color: color}}>클릭했습니다.</p>
        <button type="button" onClick={() => setColor('red')}>클릭</button>

        {/* Quiz: 버튼 내용 바꾸기 */}
        <p></p>
        <button type="button" onClick={() => {setText(end)}}
          >{text}</button>
        <p></p>
        <button type="button" onClick={() => {setFinish(true)}}
          disabled={finish}>{finish ? '마감' : '신청'}</button> 
          {/* 비활성화 */}
    </div>
  );
}

export default Counter;