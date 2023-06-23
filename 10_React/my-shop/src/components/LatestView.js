import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { selectProductList } from '../features/product/productSlice';

const LatestViewWrapper = styled(Card)`
position: fixed;
top: 100px;
right: 20px;
box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
width: 8rem;
`

function LatestView(props) {
  const lastestViewed =JSON.parse(localStorage.getItem('latestViewed')); // 못찾으면 null

  const productList = useSelector(selectProductList); // 처음 새로고침 시 한번 빈배열
  if (!lastestViewed || productList.length < 1) {
    return null; // 렌더링 막기
  }

  // 최근 본 상품들만 찾아서 배열로 만들기
  const lastestViewedProducts =  lastestViewed.map((id) => {
    return productList.find((product) => product.id === id)
  })
  return (
<LatestViewWrapper>
  <Card.Header>최근 본 상품</Card.Header>
      <ListGroup variant="flush">
        {lastestViewedProducts.map((product, index) =>
        // 주의: key 속성은 가장 최상위 엘리먼트에 부여, <></>에는 속성 사용 불가
        <React.Fragment key={product.id}>
        <img src={product.imagePath} onClick={() => {}} alt={`img-${index}`}/>
        <ListGroup.Item className='text-ellipsis'>{product.title}</ListGroup.Item>
        </React.Fragment>
        )}
      </ListGroup>
    </LatestViewWrapper>
  );
}

export default LatestView;