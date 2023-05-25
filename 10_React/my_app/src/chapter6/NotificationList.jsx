import React from "react";
import Notification from "./Notification";


const reservedNotifications = [
  {
    id: 1,
    message: '안녕하세요, 오늘 일정을 알려드립니다.'
  },
  {
    id: 2,
    message: '오늘은 리액트 수업을 나갈겁니다'
  },
  {
    id: 3,
    message: '엄청 어려우니 공부 열심히 하세요'
  }
  // {
  //   id: 4,
  //   message: '와 진짜 뭐가 뭔지 하나도 모르겠다'
  // },
  // {
  //   id: 5,
  //   message: '큰일났네.... '
  // },
  // {
  //   id: 6,
  //   message: '뭐지 이정도로 어려워진다고???'
  // },
  // {
  //   id: 7,
  //   message: '.......'
  // }
]

let timer;

class NotificationList extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      notifications: [] // state에 notifications라는 이름으로 초기값은 빈배열
    };
  }

  // 컴포넌트가 생성될 때

  componentDidMount() {
    const {notifications} = this.state;
    setInterval(() => {
      if (notifications.length < reservedNotifications.length) { // 3개보다 작은 경우에
        const index = notifications.length;
        notifications.push(reservedNotifications[index]) // NOTIFICATIONS 배열에 추가
        this.setState({ // 인자값으로 객체 넣음
          // notifications: notifications // 둘이 같으면 하나 지워도됨
          notifications // ES6차
        });
      } else {
        // 추가 실습2: 언마운트 시키기 위해 작성
        // this.setState({
        //   notifications: []
        // });
        clearInterval(timer);
      }
    },1000);
  }
  render() {
    return (
      <div>
        {this.state.notifications.map((noti) => {
          return (
            <Notification 
              key={noti.id}
              id={noti.id}
              message={noti.message}
            />
          );
        })}
      </div>
    )
  }
}

export default NotificationList;