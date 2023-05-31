import React, { useState } from 'react';

function Reservation(props) {
  // 여러 개의 입력 제어하기 => 여러 개의 state 선언
  const [breakfast, setBreakfast] = useState(false);
  const [numberOfGuests, setNumberOfGuests] = useState(2);
  const [roomType, setRoomType] = useState('Single')
  const [whatDate, setWhatDate] = useState()
  const [whatTime, setWhatTime] = useState();




  const handleBreakfastChange = (e) => {
    setBreakfast(e.target.checked)
  };
  
  const handleGuestChange = (e) => {
    setNumberOfGuests(e.target.value);
  };
  
  const handleSubmit = (e) => {
    alert(`조식 여부: ${breakfast}. 투숙객수: ${numberOfGuests} 원하는 방: ${roomType} 예약 날짜: ${whatDate} 체크인시간: ${whatTime}`);
    e.preventDefault();
  }

  const roomTypeChange = (e) => {
    setRoomType(e.target.value)
  }

  const choiseDate = (e) => {
    setWhatDate(e.target.value)
  }
  const choiseTime = (e) => {
    setWhatTime(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        조식여부:
        <input 
        type="checkbox"
        // checked 속성은 checkbox랑 radio 타입에 존재하고 boolean 값
        checked={breakfast}
        onChange={handleBreakfastChange}
        />
      </label>
      <br />
      <label>
        투숙객 수:
        <input 
        type="number" 
        value={numberOfGuests}
        onChange={handleGuestChange}/>
      </label>
        <br />
      <label>
        싱글
        <input 
        type="radio" 
        name='room'
        value='Single'
        checked={roomType === 'Single'}
        onChange={roomTypeChange}/>
        트윈
        <input 
        type="radio" 
        name='room'
        value='Twin'
        checked={roomType === 'Twin'}
        onChange={roomTypeChange}/>
        더블
        <input 
        type="radio" 
        name='room'
        value='Double'
        checked={roomType === 'Double'}
        onChange={roomTypeChange}/>
      </label>
      <br />
      <label>
        예약 날짜
        <input 
        type="date" 
        value={whatDate}
        onChange={choiseDate}/>
      </label>
      <label>
        체크인 시간
        <input 
        type="time" 
        value={whatTime}
        onChange={choiseTime}/>
      </label>
        <button type='submit'>제출</button>
    </form>
  );
}


export default Reservation;