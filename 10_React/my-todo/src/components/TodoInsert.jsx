import React, { useState } from 'react';
import styled from 'styled-components';
import {MdAdd as AddIcon} from 'react-icons/md'
// Tip: asㄹ르 사용하여 별칭을 붙여 사용하면 추후 아이콘 바꿀때 한곳만 바꾸면 되서 편함


const TodoInsertWrapper = styled.form`
  display: flex;
  background: #495057;
`;

const StyledInput = styled.input`
/* 기본 스타일 초기화 */
background: none;
outline: none;
border: none;
padding: 0.5rem;
font-size: 1.125rem;
line-height: 1.5;
color: white;
flex: 1;

&::placeholder {
  color: #dee3e6;
}
`;

const StyledButton = styled.button`
  border: none;
  background: #868e96;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s background ease-in;

  &:hover {
    background: #adb5bd;
  }
`;

// 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
// state를 통해 input의 상태를 관리 (제어컴포넌트)
function TodoInsert({onInsert}) {

  const [value, setValue] = useState('');

const handleChange = (e) => {
  setValue(e.target.value)
};

const handleSubmit = (e) => {
  onInsert(value);
  setValue('') // value값 초기화

  // submit 이벤트가 발생시키는 새로고침을 방지
  e.preventDefault();
};





  return (
    <TodoInsertWrapper onSubmit={handleSubmit}>
      <StyledInput type='text' placeholder='할 일을 입력하세요.' onChange={handleChange} value={value}/>
      <StyledButton type='submit'>
        <AddIcon/>
      </StyledButton>
    </TodoInsertWrapper>
  );
}


export default TodoInsert;