import { createGlobalStyle } from "styled-components";

import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap CSS 추가 필수
import 'react-toastify/dist/ReactToastify.min.css'; // reacttoastify css 추가
import { ToastContainer } from "react-toastify";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Main from "./pages/Main";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";




// 글로벌(공통) 스타일 설정
const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
  }

  #root {
    text-align:  center;
  }

  * {
    box-sizing: inherit;
  }

.cursor-pointer {
  cursor: pointer;
}
.text-ellipsis {
  white-space: nowrap; // 줄바꿈 안함
      overflow: hidden; // 넘친부분 숨기기
      text-overflow: ellipsis; // 넘친부분을 어떻게 보일지 지정 (ellipsis = 줄임표)
}
`

function App() {  
  return (
    <>
    <GlobalStyle />
      {/* 1) 부트스트랩 연습
      <Button variant="outline-primary">Primary</Button>
      {/* 2) 기존 부트스트랩 */}
      {/* <button type="button" className="btn btn-primary">Primary</button> */}

      {/* 헤더영역: 상단 네비게이션 바 */}
{/*       
      <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link >홈</Nav.Link>
            <Nav.Link >장바구니</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      </header> */}
      {/* Quiz: Header 컴포넌트 추출 및 Outlet을 활용하여 라우팅 구성해보기 */}
      {/* src/pages/Header */}

      <Routes>
        <Route path="/" element={<Header />}>
          {/* index: index route(여기서는 default child route) */}
        <Route index element={<Main />} />
        {/* 상품별 상세페이지 여러개를 라우팅하려면? URL 파라미터 사용 */}
        {/* /detail/1 로 접속하면 productId에 1이 담김 */}
        <Route path="/detail/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />}/>
        </Route>
      </Routes>

      <ToastContainer 
        position="bottom-right"
        autoclose={3000}
        pauseOnFocusLoss={false}
        theme="dark"
      />
    </>
  );
}

export default App;

// ## Bootstrap
// 레이아웃을 복사 붙여넣기 식으로 편하게 개발 가능한 css, js 라이브러리
// 리액트 용이 따로 있는데 나는 기존것이 더 익숙하다 싶으면 기존 Bootstrap을 써도 무관
// https://react-bootstrap.netlify.app/

// ## 패키지 설치하기
// npm install react-bootstrap bootstrap styled-components react-router-dom @reduxjs/toolkit react-redux axios
