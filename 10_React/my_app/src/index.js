import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JsxUse from './chapter3/3.4/JsxUse';
import Library from './chapter3/Library';
import Clock from './chapter4/Clock';
import PropsUse from './chapter5/5.3/PropsUse';
import Comment from './chapter5/5.3/Comment';
import CommentList from './chapter5/CommentList';
import Notification from './chapter6/Notification';
import NotificationList from './chapter6/NotificationList';
import Counter from './chapter7/7.2/Counter';
import SetStateMerger from './chapter7/7.2/SetStateMerge';
import SetStateMerge from './chapter7/7.2/SetStateMerge';
import CounterEffect from './chapter7/7.3/ex1/CounterEffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Root Dom Node에 랜더링 하도록 하는 함수
// 처음으로 랜더링할 컴포넌트를 지정하는데 App 컴포넌트가 기본적으로 들어가있음
root.render(
    <App />
);

// 3장 예제
// root.render(
//   // <JsxUse />
//   <Library/>
// );

// 4장 예제
// 1초마다 Clock 컴포넌트를 렌더링 하는 코드
// setInterval (() => {
//   root.render(
//     <Clock />
//   );
// }, 10)

  // root.render(
  //   <PropsUse />
  // );

  // root.render(
  //   <Comment />
  // );
  // root.render(
    // <CommentList />
  // );

  // 5장 예제
  // root.render(
  //   <PropsUse />
  // );

  // 6장 예제
  // root.render(
  //   <NotificationList />
  // );

  // 7장 예제
  // root.render(
  //   <Counter />
  // );
  // 8장 예제
  // root.render(
  //   <SetStateMerge />
  // );
  // 9장 예제
  root.render(
    <CounterEffect />
  );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
