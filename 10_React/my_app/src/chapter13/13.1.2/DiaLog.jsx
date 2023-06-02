import React from 'react';
import FancyBorder from './FancyBorder';

// 13.1.1.1 WelcomeDialog 리랙터링
function DiaLog(props) {
  return (
    // 제목과 메시지, 컬러를 어떻게 사용하느냐에 따라
    // 인사말 다이얼로그가 될수도 있고, 경고 다이얼로그가 될수도 있음
    // WelcomeDialog처럼 쓰지말고 범용적인 Dialog를 만들고 이를 구체화 하여 사용
    <>
    <FancyBorder color={props.color}>
    <h1 className='Dialog-title'>
      {props.title}
    </h1>
    <p className='Dialog-Massage'>
      {props.message}
    </p>
    </FancyBorder>
    </>
  );
}

export default DiaLog;