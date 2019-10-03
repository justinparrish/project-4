import React from 'react';

const carNickname = (car) => (
  <span>{car.nickname}</span>
)

const carInfo = (car) => (
  <p>{car.year} - {car.make} - {car.model}</p>
)

const carImage = (car) => (
  <img src={car.image_url} />
)


const car = 
  {
    image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSd3O_uOKkMneXrRJZkaumguGiC-t8QkEgg8aww75TlRzox-Uc0'
    ,nickname: 'name',
    year: 2003,
    make: 'chevy',
    model: 'monte carlo'
}

const App = () => {
  return (
    <div>
    <h1>MotorBoard</h1>
    {carNickname(car)}
    {carInfo(car)}
    {carImage(car)}
    </div>
  )
}

export default App;
