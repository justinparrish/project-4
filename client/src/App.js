import React from 'react';

const getCarNickname = (car) => (
  <span>{car.nickname}</span>
)

const nickname = {nickname: 'name'}

const App = () => {
  return (
    <div>
    <h1>MotorBoard</h1>
    {getCarNickname(nickname)}
    </div>
  )
}

export default App;
