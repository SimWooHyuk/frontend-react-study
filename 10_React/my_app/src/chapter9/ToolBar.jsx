import React from 'react';

const styles = {
  wrapper: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    borderBotton: "1px solid gray",
  },
  greeting: {
    marginRight: 8
  }
  
}


function ToolBar(props) {
  const { isLoggedIn, handleClickLogin, handleClickLogout } = props;
  return (
    <div style={styles.wrapper}>
      {/* Quiz: 로그인/로그아웃 버튼을 누를때마다 
      로그인 상태이면 인사말이 나오토록 &&로 조건부 렌더링
      인사말이 나오고 안나오고 바뀌고, 
      버튼도 로그인/ 로그아웃 버튼이 바뀌도록 만들기 */}
      {/* isLoggedIn 값에 따라 조건부 렌더링 처리 */}
      {isLoggedIn &&  <div style={styles.greeting}>가나다라</div>}

      {isLoggedIn ?  <button type='button' onClick={handleClickLogout}>로그아웃</button>: <button type='button' onClick={handleClickLogin}>로그인</button>}

    </div>
  );
}

export default ToolBar;

// 정리:
// 논리 연산자(&&)와 삼항 연산자 (? :)를 이용한 조건부 렌더링은 매우 많이 쓰임
// 동적인 UI 만드는 3 step
// 1. HTML/CSS로 미리 마크업 디자인 완성
// 2. UI 현재 상태를 state로 저장
// 3. 조건문으로 state에 따라 UI가 어떻게 보일지 작성