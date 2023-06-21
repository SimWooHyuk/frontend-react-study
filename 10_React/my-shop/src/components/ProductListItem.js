
import { Col } from 'react-bootstrap';

import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

// 방법1: 스타일드 컴포넌트로 스타일 확장 
const StyledCol = styled(Col)`
  cursor: pointer;
`;
// 방법2: 공통 스타일로 작성


function ProductListItem(props) {
  const {product} = props
  console.log(props);

  // 이동경로 설정하기
  const navigate = useNavigate();

  return (
    <StyledCol md={4} sm={6} className="cursor-pointer">
      <img src={product.imagePath} width="80%" 
        onClick={() => {
          navigate(`/detail/${product.id}`);
        }}
      />
      <h4>{product.title}</h4>
      <p>{product.price}</p>
    </StyledCol>
  );
}

export default ProductListItem;

