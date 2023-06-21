import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { BrowserRouter, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap CSS 추가 필수

function Header(props) {
  const navigate = useNavigate();

  return (
    <>
      <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#" onClick={() => { navigate('/');}}>Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/');}}>홈</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart');}}>장바구니</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      </header>

      <Outlet />
    </>
  );
}

export default Header;

