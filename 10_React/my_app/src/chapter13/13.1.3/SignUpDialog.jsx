import React from 'react';
import DiaLog from './DiaLog';

function SignUpDialog(props) {
  const [login, setLogin] = useState('');

  const handleChange = () => {
    setLogin(e.target.value)
  }
  const handleSignUp = () => {
    alert(`탑승을 환영합니다, ${login}`)
  }
  return (
    <DiaLog
    title="화성 탐사 프로그램"
    message="당신을 어떻게 부르면 될까요?"
    >
      <input 
      type="text" 
      value={login}
      onChange={handleChange}
      />
      <button type='button' onClick={handleSignUp}>
        가입하세요!
      </button>
    </DiaLog>
  );
}

export default SignUpDialog;