import React from 'react';

// 고정값들은 전역 변수로 선언하여 사용
// 여기서 name은 실제 카테고리 값, text는 렌더링할 때 사용할 한글 카테고리명
const categories = [
  {
    name: 'all',
    text: '전체보기'
  },
  {
    name: 'business',
    text: '비즈니스'
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트'
  },
  {
    name: 'health',
    text: '건강'
  },
  {
    name: 'science',
    text: '과학'
  },
  {
    name: 'sports',
    text: '스포츠'
  },
  {
    name: 'technology',
    text: '기술'
  }
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

function Categories(props) {
  return (
    <div>
      
    </div>
  );
}

export default Categories;