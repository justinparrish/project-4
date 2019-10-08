import React from 'react';
import './App.css'
import { Link, Route, Router, Switch } from 'react-router-dom'
import {
  Button, Card, CardActions, CardTitle, Content, FABButton, Footer, FooterLinkList,
  FooterSection, Header, Icon, Navigation, Layout, Tabs, Tab
} from 'react-mdl'

import CarForm from './components/CarForm'
import ServiceForm from './components/ServiceForm'
import OwnerForm from './components/OwnerForm'
import CarServices from './components/CarServices';

//---------Owner Info---------
const username = (text) => (<li>{text.username}</li>)
const usernameList = (list) => (<ul>{list.map(username)}</ul>)

//----------Single Car Info ---------------
const carMake = (car) => (<span className='car-info'>{car.year} - {car.make} - {car.model}</span>)
const carMakeList = (cars) => (<span>{cars.map(carMake)}</span>)
const carInfoDashboard = (owner) => (<div>{carMakeList(owner.cars)}</div>)

//-----------Car Nickname ----------------
const carNickname = (car) => (<h3>{car.nickname}</h3>)
const nicknameList = (cars) => (<span>{cars.map(carNickname)}</span>)
const nicknameDashboard = (owner) => (<div>{nicknameList(owner.cars)}</div>)

//----------Car Image (Log) ---------------
const carImage = (car) => (<div><img src={car.image_url} style={{ width: '500px' }} /></div>)
const imageList = (cars) => (<div>{cars.map(carImage)}</div>)
const logImage = (owner) => (<div>{imageList(owner.cars)}</div>)

const logTab = (car) => (
  <div className='log-tab'>
    <span>
    <h3>{car.nickname}</h3>
    <img src={car.image_url} style={{ width: '500px' }} />
    </span>
    <section>
    <h4>{car.year} - {car.make} - {car.model}</h4>
      {ownerCarService(car)}
    </section>
    <hr />
  </div>
)

const logTabList = (cars) => (<div>{cars.map(logTab)}</div>)
const logFull = (owner) => (<div>{logTabList(owner.cars)}</div>)

//------------Car card (Dashboard) ----------------
const carCard = (car) => (

  <Card shadow={6} style={{ width: '512px', margin: 'auto', marginBottom: '50px' }}>
    <CardTitle style={{ color: '#fff', height: '200px', background: `url(${car.image_url}) center / cover` }}>
      {car.nickname}
    </CardTitle>
    <CardActions border>
<Button colored ripple>View Log</Button>
    </CardActions>
  </Card>
)

const listCards = (cars) => (<div className='car-cards'>{cars.map(carCard)}</div>)
const ownerCars = (owner) => (
  <div className='owner-cars'>
    <h6>Owner: {owner.username}</h6>
    {listCards(owner.cars)}
  </div>
)

//---------Service History Info---------
const servicePreview = (service) => (<li>{service.service} - {service.date}</li>)
const serviceList = (services) => (<ul>{services.map(servicePreview)}</ul>)
const ownerCarService = (cars) => (serviceList(cars.service_history))


const serviceFullInfo = (info) => (
  <div>
    <li>{info.dealership}</li>
    <li>{info.location}</li>
    <li>{info.service}</li>
    <li>{info.mileage}</li>
    <li>${info.price}</li>
    <li>{info.date}</li>
    <li>{info.note}</li>
  </div>
)
const serviceFullInfoList = (list) => (
  <span>
    {list.map(serviceFullInfo)}
  </span>
)




//--------Test Data Structures------------

const testOwner =
{
  1:
  {
    id: 1,
    username: 'juuuussttin',
    email: 'justin@gmail.com',
    cars:
      [
        {
          id: 1
          , image_url: 'http://carphotos.cardomain.com/ride_images/3/206/2861/25513930001_large.jpg'
          , nickname: 'bertha'
          , year: 2003
          , make: 'chevy'
          , model: 'monte carlo'
          , service_history:
            [
              {
                id: 1,
                dealership: 'stone mountain ford',
                location: 'stone mountain, ga',
                service: 'Brakes',
                mileage: 250000,
                price: 59.90,
                date: '2019-10-10',
                note: 'my name is lynd'
              }
            ]
        }
      ]
  },
  //-----------------------------------------------------------
  2:
  {
    id: 3,
    username: 'lynd21',
    email: 'justin@gmail.com',
    cars:
      [
        {
          id: 2
          , image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyx_2uIVjt64vs8tDNCMg_uHPRgHlXfFLTqqC3ER44-oZrJxtc'
          , nickname: 'shirley'
          , year: 1999
          , make: 'isuzu'
          , model: 'trooper'
          , service_history:
            [
              {
                id: 2,
                dealership: 'stone mountain ford',
                location: 'stone mountain, ga',
                service: 'Brakes',
                mileage: 250000,
                price: 59.90,
                date: '2019-10-10',
                note: 'my name is lynd'
              }
            ]
        }
      ]
  }
}
/* Fetch to GET
const getOwnersFromServer = () => (
  fetch('/api/owner/')
    .then(res => res.json())

)

const getCarsFromServer = () => (
  fetch('/api/car/')
    .then(res => res.json())
)
*/

class App extends React.Component {
  state = {
    activeTab: 1,
    currentOwner: 1,
    owners: testOwner,
    addCar: false,
    addHistory: false
  }

  /* Ajax Request 
  componentDidMount = () => {
    getOwnersFromServer().then(owners => {
        console.log('from server: ', owners)
      })
    getCarsFromServer().then( cars => {
      console.log('from server', cars)
    })
  }
  */

  //---------Adding From Form ----------
  addNewCarForOwner = (newInfo) => {
    let owners = { ...this.state.owners }

    owners[this.state.currentOwner].cars.push(newInfo)

    this.setState({ owners })
  }

  // addService = (newInfo) => {
  //   let owners = { ...this.state.owners }
    
  //   owners[this.state.currentOwner]
  // }

  //------- Toggle Forms ----------
  toggleAddCar = () => {
    const addCar = !this.state.addCar
    console.log(this.state.owners[this.state.currentOwner].cars[0].service_history)
    this.setState({ addCar })
  }

  toggleAddHistory = () => {
    const addHistory = !this.state.addHistory
    this.setState({ addHistory })
  }

  //----------- Getting current entity ------------
  getCurrentOwner = () =>
    this.state.owners[this.state.currentOwner]

  getCurrentCar = () => 
    this.state.owners[this.state.currentOwner].cars
    
  getAllOwners = () =>
    Object.values(this.state.owners)

  //-------------- Tabs ------------------
  toggleTab = () => {
    // LOG TAB (list service history for one car)
    if (this.state.activeTab === 0) {
      return (
        <div>
          <header>
            <h1>Log</h1>
            <FABButton onClick={this.toggleAddHistory} className='service-button' ripple>
              <Icon name="+" />
            </FABButton>
            <aside>
              {this.state.addHistory ? <ServiceForm addNewServiceHistory={this.addService} /> : null}
            </aside>
          </header>
          <section>
          {logFull(this.getCurrentOwner())}
          </section>
        </div>
      )
    }

    // DASHBOARD TAB (list all cars)
    else if (this.state.activeTab === 1) {
      return (
        <div>
          <header>
            <h1>Dashboard</h1>
            <FABButton onClick={this.toggleAddCar} className='car-button' ripple>
              <Icon name="+" />
            </FABButton>
          </header>
          <section>
            {this.state.addCar ? <CarForm addNewCar={this.addNewCarForOwner} /> : null}
          </section>
          <aside>
            {ownerCars(this.getCurrentOwner())}
          </aside>
        </div>
      )
    }

  }


  render = () => (
    <div style={{ height: '789px', position: 'relative' }}>
      <Layout>
        <Header title="MotorBoard" className='header-color' scroll>
          <Navigation>
            <a href="#" style={{ marginTop: '14px' }}><i className="fa fa-cog fa-2x" aria-hidden="true"></i></a>
            <a href="#" style={{ marginTop: '14px' }}><i className="fa fa-home fa-2x" aria-hidden="true"></i></a>
          </Navigation>
        </Header>
        <Tabs activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Log</Tab>
          <Tab>Dashboard</Tab>
        </Tabs>
        <Content>
          <div className='tab-content'>
            {this.toggleTab()}
          </div>
        </Content>
        <Footer size="mini">
          <FooterSection type="left" logo="MotorBoard">
            <FooterLinkList>
              <a href="#">Help</a>
              <a href="#">Privacy & Terms</a>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </Layout>
    </div>
  )
}

export default App;
