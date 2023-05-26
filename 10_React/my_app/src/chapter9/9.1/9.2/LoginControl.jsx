import React from 'react';
import Greeting from '../Greeting';

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}
function LogOutButton(props) {
  return (
    <button onClick={props.onClick}>
      LoginOut
    </button>
  );
}
function LoginControl(props) {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setisLoggedIn(ture)
  }
  const handleLogOutClick = () => {
    setisLoggedIn(false)
  }

  let button;
  // 이 예제의 포인트!
  // button 변수에 컴포넌트 대입(결과적으로는 리액트 엘리먼트 저장됨)
  if (isLoggedIn) {
    button = <LogOutButton on click= {handleLogOutClick} />
  } else {
  button = <LogInButton on click= {handleLogInClick} />
  }
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn}/>
      {button}
    </div>
  );
}

export default LoginControl;

