import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function GamePage(props) {
  const navigate = useNavigate();
  return (
    <>
    <h1>게임페이지</h1>
    <ul>
      <li>
        <Link to="/games/hot">인기 게임</Link>
      </li>
      <li>
        <Link to="/games/new">신규 게임</Link>
      </li>
    </ul>
    {/* Nested Route의 자식 엘리먼트를 보여주는 역할 */}
    <Outlet />
    <button  onClick={() => { navigate('/')}}>메인으로</button>
    </>
  );
}

export default GamePage;