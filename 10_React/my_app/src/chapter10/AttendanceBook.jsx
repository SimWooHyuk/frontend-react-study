import React from 'react';

// Quiz2: 배열의 각 요소(객체 데이터)에 id 속성을 추가하고 배열 렌더링 시 key값 추가해보기
const student = [
  {id : 1,
  name: '심우혁',
  },
  {id : 2,
  name: '김춘덕',
  },
  {id : 3,
  name: '김을수',
  },
  {id : 4,
  name: '김아무개',
  },
  {id : 5,
  name: '김곽수',
  },
  {id : 6,
  name: '가나다',
  },
  {id : 7,
  name: '라마바',
  },
  {id : 8,
  name: '사아자',
  },
]

// const nameList = student.map((students,index) => {
//   console.log(students);
//   return <li key={student.id}>{students.name}</li>
// })
const nameList = student.map((students) =><li key={students.id}>{students.name}</li>)

function AttendanceBook(props) {
  return (
    <ul>
      {/* Quiz: 학생 이름을 반복 렌더링 해보기 */}
      {nameList}
    </ul>
  );
}
export default AttendanceBook;