import CommentEx from "./5.3/5.6/CommentEx";
import Comment from "./5.3/Comment";

// 댓글 데이터를 별도의 객체로 분리하고 반복 가능한 배열에 담기
const comments = [
  {
    name: '김갑수',
    content: '안녕하세요.'
  },
  {
    name: '김을수',
    content: '반갑습니다.'
  },
  {
    name: '김병수',
    content: '행복하세요.'
  },
  {
    name: '김정수',
    content: '사랑하세요.'
  },
  {
    name: '김무수',
    content: '건강하세요.'
  },
]


// 댓글들을 포함하는 CommentList 컴포넌트
function CommentList(props) {
  return (
    <div>
      {/* Quiz: props를 추가하여 name과 content 값 전달 */}
      {/* <Comment name ="김갑수" content= "가나다라" />
      <Comment name ="김을수" content= "마바사아" />
      <Comment name ="김병수" content= "자차카타" /> */}

      {/* 배열을 동적으로 렌더링 해야 할 때에는 배열의 map()함수를 사용
      (map(): 배열 안에 있는 각 요소를 변환하여 새로운 배열을 만듦) 
      앞으로 리액트에서 배열을 동적으로 랜더링 해야 한다 할때는 &&&&&무조건&&&&& map() 함수를 사용하여
      일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 변환해주면 됨*/}
      {/* {comments.map((comment, index) => {
        return (
          <Comment name={comment.name} content={comment.content} />
        );
      })} */}
      {comments.map(comment => <Comment name={comment.name} content={comment.content} />)};


    </div>
  )
}

export default CommentList;