import { useEffect, useState } from "react";

function EffecSummary() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  // (공통사항)
  // useEffect는 마운트 시에는 무조건 실행됨!!
  // useEffect의 return 되는 함수는 언마운트 시에는 무조건 실행됨!!

  // 렌더링(마운트 + 업데이트) 될 때마다 매번 실행됨
  useEffect(() => {
    console.log('나는 매번 실행됨');

    return () => {
      // 마운트를 제외한 해당 effect가 실행되기 전과 언마운트 시 실행됨
      // console.log('도레미파솔라시도');
    };
  });
  // count가 변할때마다 실행됨
  useEffect(() => {
    console.log('%c카운트가 바뀔때마다 실행됨', 'color: red; background:#ffdae0;');
  }, [count]);

  // name이 변할때마다 실행됨
  useEffect(() => {
    console.log('%c이름이 바뀔때마다 실행됨', 'color: blue; background: #e2d6fd;');
  }, [name]);

    useEffect(() => {
    if (name ==='가나다라' && count === 10) {
      console.log('%c 카운트가 10이되고 가나다라를 입력함', 'color: green; background: #e2d6fd;');
    }
  },[name, count]);

  // if (name ==='가나다라' && count === 10) {
  //   // alert('카운트가 10이되고 가나다라를 입력해서 나타남')
  //   return (

  //   );
  // }
  // 마운트 될때만 실행됨
  useEffect(() => {
    console.log('%c나는 한번만 실행됨', 'color: yellow; background: black;');

    return () => {
      // 언마운트 될때만 실행됨
      console.log('%c언마운트 될때만 실행', 'color: red; background: black;');
    }
  }, []);

  return(
    <div>
      <p>카운트: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>카운트 +1</button>
      <p>이름: {name}</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      {name === '가나다라' && count === 10 && 
      <>
        컴포넌트
      </>}
    </div>
  );
}

export default EffecSummary;