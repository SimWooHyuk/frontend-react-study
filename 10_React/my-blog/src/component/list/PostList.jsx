import React from 'react';
import styled from "styled-components";
import PostListItem from './PostListItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

// map() 함수를 이용해서 PostListItem을 반복 렌더링 하는 컴포넌트
function PostList(props) {
  const { posts } = props;

  return (
    <Wrapper>
      {/* Quiz: 반복 렌더링 */}
      {posts.map((post) => {
        return (
          <PostListItem key={post.id} post={post} />
        )
      })}
    </Wrapper>
  );
}

export default PostList;