import { useEffect } from "react";

function Timer() {
  // 화면에 처음 렌더링 됐을 때 한번만 타이머 작동시킴
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('타이머 실행중...');
    }, 1000);

    // 화면에서 사라질 때 만든 타이머 정리하기
    return () => {
      clearInterval(timer)
      console.log(`${timer} 타이머 종료!`);
    };
  }, [])
  return (
  <div>
    <span>™🕓타이머가 시작 됐습니다!</span>
  </div>
  // Tip! 윈도우즈 이모지 단축키: 윈도우키 +마침표(.)
  )
}

export default Timer;