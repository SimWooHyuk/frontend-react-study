import { createGlobalStyle } from"styled-components"
import { reset } from"styled-reset"
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { useCallback, useRef, useState } from "react";

// 패키지 설치
// npm install styled-components styled-reset react-icons

// styled-reset: reset-css
// react-icons: 리액트에서 다양한 아이콘을 쓸 수 있는 라이브러리
// SVG 형태의 아이콘을 리액트 컴포넌트 처럼 쉽게 사용
// 커스텀은 props 또는 CSS 스타일로 변경 가능

// 글로벌(공통) 스타일 적용과 reset css 적용
// createGlobalStyle을 사용하면 컴포넌트가 만들어지고 이를 렌더링하면 됨
const GlobalStyle = createGlobalStyle`
/* reset css 적용 */
  ${reset}

  /* 글로벌(공통) 스타일 */
  body {
    background: #e9ecef;
  }
`;


function App() {
  // todos 배열안에 객체 형태로 데이터가 존재
  // id, 내용, 완료 여부
  // TodoList에 props로 전달
  const [todos, setTodos] = useState([
  {
    id: 1,
    text: '수업 교안 작성하기',
    checked: true
  },
  {
    id: 2,
    text: '시험 채점하기',
    checked: true
  },
  {
    id: 3,
    text: '단계별 실습 예제 만들기',
    checked: false
  },
]);

//  새 객체를 만들 때마다 id값에 1씩 더해주어야 하는데 useRef()를 사용하여 변수 생성
// Quiz: state가 아닌 이유? id값은 렌더링되는 정보가 아니기 때문
// (화면에 보이지도 않고, 이 값이 바뀐다고 해서 컴포넌트가 재렌더링 될 필요도 없음)
// 단순히 새로운 항목을 만들 때 참조되는 값임
  const nextId = useRef(4);
console.log(nextId);
  // props로 전달해야 할 함수를 만들 때는 useCallback을 사용해본다!
  const handleInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false 
    };

    // 방법1 - 이전까지 쓰던 방법
    // const copyTodos = [...todos];
    // copyTodos.push(todo);
    // setTodos(copyTodos); // 새로운 배열을 만드러 넣어줌

    // 방법2 - 배열의 내장 함수 이용
    // 함수형 업데이트를 쓸 경우 의존성을 제거해 줄 수 있다!
    setTodos(todos.concat(todo)); // 새로운 배열을 반환함

    nextId.current += 1; // nextId에 1씩 더하기
  }, [])

  const handleRemove = useCallback((id) => {
    // 방법1
    const copyTodos = [...todos];
    const targetIndex = todos.findIndex(todo =>  todo.id === id);
    copyTodos.splice(targetIndex, 1);
    setTodos(copyTodos);


  },[todos])
  return (
    <>
      {/* <Reset /> */}
      <GlobalStyle />
      <TodoTemplate>
        <TodoInsert onInsert={handleInsert}/>
        <TodoList todos={todos} onRemove={handleRemove}/>
      </TodoTemplate>
    </>
  );
}

export default App;
