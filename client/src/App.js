import React from 'react';
import './App.css'
import { Button, Card, CardActions, CardTitle, Content, FABButton, Footer, FooterLinkList, 
        FooterSection, Header, Icon, Navigation, Layout, Tabs, Tab } from 'react-mdl'

import CarForm from './components/CarForm'
import ServiceForm from './components/ServiceForm'
import OwnerForm from './components/OwnerForm'


const carCard = (car) => (
  <Card shadow={6} style={{ width: '512px', margin: 'auto', marginBottom: '50px'}}>
    <CardTitle style={{ color: '#fff', height: '200px', background: `url(${car.image_url}) center / cover` }}>
      {car.nickname}
    </CardTitle>
    <CardActions border>
      <Button colored ripple>View Log</Button>
    </CardActions>
  </Card>
)

const listCards = (cars) => (
  <div className='car-cards'>
    {cars.map(carCard)}
  </div>
)

//---------Owner Info---------
const username = (text) => (<li>{text.username}</li>)
const usernameList = (list) => (<ul>{list.map(username)}</ul>)
const ownerCars = (owner) => (
  <div>
    {owner.username}
    {listCards(owner.cars)}
  </div>
)

//---------Service History Info---------
/* will link to modal of full info */
const servicePreview = (info) => (<li>{info.service} - {info.date}</li>)
const serviceList = (list) => (<ul>{list.map(servicePreview)}</ul>)

/* will be used for modal */
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
          , image_url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH8AyAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAQIDBQYAB//EAEIQAAIBAwIDBgIHBQYFBQAAAAECAwAEEQUhEjFBBhMiUWFxgZEUMlKhscHRI0JicoIHJDND4fAWF5Ki8RU0c9Li/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EAB4RAQEBAAIDAAMAAAAAAAAAAAABEQIhEjFRAxMi/9oADAMBAAIRAxEAPwALTLbWjFFFcx29vaqpUSNKnE2BsPrY51Ff6TrDRyCyjd/AEBRwylSPECBUeraPqLvDbWdtCbW3hVEIdBxMd2PPqT91F6Bp2oW9iqtBGri/hkKpKm6Lz69N6t/Hx9szlrPXuh6gO5K6ZMkixAOOeW25eXPl6fGqu4sb2AZuLO5hTbLMp4fia9i7RWI1XS2iikjFyjBoSW2z1B9CM1QL2dvYpcwiMoVw6vIGz5jYcqx4KzthC8UIQa/bosso40aTKoMEgkehFDahLqdlMirfWrW0gIBs5A/EBsegPU/OtavZnUi7/Q3jiiPMZC8J8uWD86q7jsdfW073t81hIqoS7JceMj2q5Eus3Ncxh0m7qU8AwuWO2d+Yqd7uKVA86SOYSCqySPjc8+eSdhUOpyWdldIrFZA64ww5AEAcvc/I06KOOcPi0fGPHJwHhx6E9a1/Jl1daR2kukkFtFdSRwO+TGku3HnPF55yK113c6roek2l/JcXP0acnjXvCWR28QOeud68ytprBAe5jAkiY5DZyGHI/hV/JcX+s6atnLecXGFjQPxIigDkcjHMCs8pLOmpvtZ3/aeO8QNc6vNZuFIR5eI53B8OMny5VU2F5axaxf3MfaRbZsqI7qOQp3h4QTtg5Geefzpw7Fv9H7nU7m3JH1RHKRj442onUezlhNbJbKkQ7vB44lxk455xWOPrsttM1LVLWOSK4XXRcOUALwSEKTkEgqeWfKibftnDFLJJ9Ok/aFdy434eXM9KpT2QsSojEsgbOcZJz91Sr2FEy8Cx3Z4clQoz+IqXjVnKi+0Xaa21OwnUzmaVl2ZmUnOMDfPlUNnqGmWVhC8HcPLGOHCEBj7moP8Al1cKc9zqOD9iHiPxwK4/2bz81GoKfJrU/pT9dw8qMfWLGe04pYELlsMqshJ251U6tetBLH9GggbEEfExII2H1cfOp/8Altdk4H08H0smNSr/AGaagYMRpefzNZEY+Bak4WJbarxLHcb3QjXwnwiQc9t9jtUljBpr3SGeLwlwoPfDCgnfbrz+6pG/s21EN4WuwQdwdPP48VRSf2fahH9aWUKOZ+iMNvi1a8am1dSxtpX7WxlkhVW4kaNuXxqx0rtZfxRSLNqVyWkk4iSdzsB+VY89jLgKQNRYZO2IT/8AaoW7HXnFxfTVY+Zg/wD1WZwbnL7Ft2o1A6jqVsBcTyBFYDicsMkgdT91VlzwPwsgPGq4O223lgU3/g+5iAbvwPDgnuT1+NOuezVxKsee/UJGELd2ctgAZPTz+dLxqWz4gEJ4I5WK8LHz3zjyrqmj0WSAoPFsCBxD/WuqYy0sepwYH7U8vtD9aq9Z167t7m2g0hkDyBmkeRQwUD0BqtPY6/XZbizPupH50tv2Z1W3nSRPoUgGQw42UkHnjnXWKuLPtHqUF7BZa4sUffrmKeNOHpkAgbb+Yx+mhi1ZAd7oD4GsNqfZ3WLp4sW8Rij5Bp9z8ht/qaDn7Law/DiOOEAY8M2c/dVvaY3FtbW/0y6uT2hCfSJO8KiHBX0yQaMnGmCPhuNUvHjkBIZMBGPUbdfhWO0rRL+yXHcwljzZyGJ+6tBaQTxkd5DbEDzjGfwrOOnnVfHY2F3dsJY7t0WXve8kAPJuQ2J4SP3Rmpr+W+EaiPvXEilmAUs0ZyTg+u/4VpYbyaJeFBGg8lXFRtIrMSwySc1UtrzA6LrEly/dWc0UcjHJ5Ab8yOZrb6Vp1nZRKscV1xgDLOX8RHXHIe1XIcH6qZPkBTov2oJ4fDy4vXyFXtmoo0LjIXCjmSOVI7KgAjTi8/DiiJZPCANguwxSRxjHG+wpGbUJ1C+RcRMYl8okCD7hQz6pqIyPpcw/qqW5nAyBt8aAkkLNzrSalOpXv791N8801tWvV5zy489qametJPOkKnff1oa463fR+L6S2P4hUf8AxbfRsMTlj08RX9aprm7Z2PLFAXEgPhAAztnFDW7stTvbyMTXd5cBPAAiN4nZvqqPfc/A+gOttItcgTjXT3RcZy94Yx7E8WT/ANOK840vX2sZLORNPa5kgcyJEm3eNsi8PqMMP6fejL3tdq+s2DXF1d3GnT94xSOO3Mh7sHAOBkn+bYUab2e20+/jK6hc2trqLHAQS54htyYgE8xzzisc6jvZEiuFk7pyjlDnhION/lWNtbOTXbmeO/vLu4CSAd4+EMbbkYxkYP6Udqen3cN1FwusVxLJiGaBgEdRgYOTsT1GTyFS9mtGVYbjp6GmEvyDH5VW2+ia60LPJeSROpwYwvefIZBIPoDR9va6m0CF5bMncZwxzjbO2amdCK4lbvYg02ccWc742rqkksL1pY3c2J4MnAMgzke1dU07EPknw5A96QBuRc0wepp4x54opcKOtLnHKkyB1ruMDkaBwJNLTA56U+3R7hyseGAOGIIIHvQdt1OKUkY8vWrGHR5ZIWkJiXH23wT8v1ouGx0dYWS/C3GTuhiWQfMirhrH2X0m/uJ47udEtY5CMQyYMw5hf1q7LgjgQgIowMcgKIvNC7GTHjXRwso+q0bNGfuNQtaabGCLc3UaZ5NNx4+JGfvrWM3s6NFbBfZV6edDXdyzAjHCq0ssMXKO7ce60BdWt26cMN/EB1DRk5/7qYmBpZw7eHenQxFzUaWN8vOWBz6HH61MYdQCEIq59GFEw25mS3HPJqkuJmmcsxx5Cibiw1Vjlowfbeg5bTUFG8H3YoYElPQDBqAbyrk8t6Ke01AjJtsDzJApYrGUWtxcSEIYULt1wPhyouOt47ObT5fp7xTRlmTgL+PnnI2OACx35Z9asdH15rScxyzNf2gHCsNyhV1H86/W8txWHtZ0W4aJ7lolVSqvFHx535YyM79c9aOhNrxEXWp38xUjCQWw3OPMn8qNPSHuJJ7XMUMFlabMJJCFUAb5Crk7ew5dKURRX4Sa2gHdA+K5uRwqw68C9SRt6ZrKxdpdI0WzRE0+7u7hDxob49SMZA8unLz2FP1LtJfzYYT2xGPFwFmAONx5HH50GjN9qMVnJZxKbi0ccKvdMdl32LKM4HMMcHkfWpdVuLXSoIO/MVxcXkgDzxtwuwUACQrjcHcZznlknp5ynaPWLl0Aurl5CcZUjh9NsfpRlhrM1xeS2+oL47ZCIiRkjffPuTnHIZ8tqmjcsE58b/L/AFrqjSTiiQmJeIqCdzzpaI7vPIV2Sa7w0tZacPWuZwDwqhdvIVW6hfiO5SyhkAnk3JO/AuOeP986fahIoeFXZixyxY7k+ZrUhaMlWOVsMWKr+4GIUn18/bl71LFL3WO6QKAchFUBR8BtQqNhcY2rnmb/AMVZEHm9nC8PeFR5ZqE3UjELxkk9M0H3pfIGQBzY9KYDJIP2YPB9tv3qAz6TwPwqxeQ9Byru9YnMhHsOlBf4YI4lHoDmommHRh8DRFk13GoxxYod73fYbVXlwxxxAn1p3CQMudqAxbpmOAN6lMwVcyOB6VUT30cAPEwGOg51WS6iHJwSB60GkbVIo+XTrmh5NWZt8gA8i3X2FZ9JJ5WzFH4umRnHsKJtgQxZiGl+3nOPag29nYaNa2j33abVEVQiulrExZtxtkL7jYfOqTtERq9rZWNgk0FvJIVlQJwJlgQoOOZxvnBHvS6LfaFbCaC40uS81BwHe8mb9lAo5lj+6MdQCazmq63cRXUx0e+E/wBKyZ5NuFMHCqnoF2z5Y65oqwS1bRbUwWrW8Sq57257sOz74+sd2P8A0qOtDXXaCDcQQNNKNg0niJ+Pl6AD+aqUtNekRESTkHiEcYwoPn6e5+JqZPo1vkXDqxH+TbuAP6n/AEz8KzRBcwXetX/HKAZeH6sQ3Cjz58vM0QI9PtlH0lvpUibCNX4gB6ty+C59xUFxfGWLuC4jt9v2MCYQ48yTlj6nNDhrXP1ZDgc+IfpTILO2mn1C8htraFF8WyQAJgdTnnnHnnemabYNF2hntEw5UPHxFc+AEEn5VP2cVJNTQxMyd3C7EjAYk4HPoBn39Ksfo08GvTCOSMQcAE5Vs8RIVgPmAfXIoNFxwADCzKB/GD+QpaDEufL4V1AVxHpSMzHlUfFVbq2pixlgEhKxPnicDPD5HFFZ5dQA128e4Ayx4UZvsg+fTpVzHfwlRxliehUE/PFY+azknuJRbXVvcpxHGZOEkex/3tVjoUU9vdTC7LxAIAu/MnqPhVnxGphvEbPdXCPj90OM1KZSCC/EB61n2sbqRuKDVI5l+zPAp+8VZXumra9nracSvLq8xyLa3bhiKeexyOnPrkY2NaQe08cmFO0YHI4OT60PcXyJ0BPn5VnRc6jF/j2N4q43IAanxXomPCO8UjpNAR+lRR81+rHxF8elRreRk44WqvF6ryMsccUiqcNISVAP51Msyc/B/SMfiaqLyN4rZO9lILEeFfKqq81ORge7Xh9aY1yko3LfByP0ofjtlJZg3r4zUAruzvk+I+9GQNY2dv8ASLwySyb8MaYHzPQCkWOInNvK4Qgt3hxwjz5jND3NxC0EymR++ZOFB4SSfUAfDPrTY14raz1lZ5BwJE6Kue4jBCqfNiefxoi41ZoYicWURxsXUE/hj5VkbC3uoZBIoEZY8ILnH3c666j/AL2Ione7nLAZwRljyAHM1NRY39xqeuKLdGxbqciMDhDHzwBVDcW1zp1xidGjYb+9XcGhPdO8I1GF71BlreNS4Tzyw2zQFys472xvcmRN1JOceWPSpo5rmQq68R4XADAHY+9M4yTTVUsccuVT26YLfswxBHjJ2X/X/eKDoY1dv20ndx9Tw5PwFFtBCHyyyRIN1iYgyt6nbA9/kDTZ45LJkLqySsMhn2b4Dp8d/aofo0174eMqvX1oCdJvbb/122XiWCAeElOh8yx3I/DpitKt/HcX13dCCORJpsqxZt1ACjGDywvOs9a9n4QwaRy2OnIVfRx8ChQoAHICgsEu7cD/ANmnwlf9a6gwMV1BYnbqTVH2rhElik2cGNsY881blxVV2kOdNYAEksKKxbDfxBSRUkV1PAP2crhfsk5FLKkUgTukCkDDBjzPnnnUPdkZyeEY/f5H2NWJgpdTmI8f/acURHqoQbFx5k/6VU743G3mN6bmrOSZGmttReZSQ2VHMg8vnT7gvNEVd5CvReX31liRjBAPwqWK6niXhjmdV8gaumLGBbq3jaNbSNl4sjL7099Qu4Yz/ckT+InOKrTeXBbi7+TPnxGpY9SnGQ/BKD0kX9KaYfFrFzGv+IrDGPGoJppu7u5IAjeXntwc6kXUIFBP0KIPjYg5FQtfzMQzE+gBOB8KgLmR2tEiNp3M2DxSSSkbdfCB/vFBq0VtkwyNLMDlW4cKDnn61FNcyzACRyQABt6VHxE9aijp76WY5k4Y/Y5J+NW/Yqa2TVHEoUyNGViL/aPM/l8azaKzOFRSzHkAN60nZfRGmuBd3RIiibCRo3jd/I+QHOoNDpdtpWivdiB5BPOSypICSmOaZ67k/OsxrkbCK0vypPefeCM4/KtbDFHJb3BvWW2FuwmPCmTNxNw4BHMk/jyPSj7WyIbezY95/iEhXPiAHP8AGgphau8jA8LcAJZEwAgH2jyH4+1SWl5LBvBEglGyPjIjH8I5A+tFwWAuV7s3saqW4ivDtxefOriz7PIBlb+1z6viiqO3sWmcyzEszHJZtyTVrBbLH9Vc1bpoNzjwS2zj+GTP5U46JfD6qofZxQVyxgCpAtH/APo9+AP7vn2YD86Y2m3ybG0mP8qk/hRAYROLixv711FGyul3NrOPPMR/SkohjcXPNQs+Nj1ok4HOoJRkHAo0r7yKzlB76BCfPGD8xVBd2scblreVgPst+tXt1bswOAaqbi2cE5FBUsqZ8SAHzXakWHvM8Eg/lbB/HFESQNjcVC0RHSqhr2koAPdfHDCoTE2ccB+DCphxp9RnX2bFSrd3CfWYSf8AyDi+/nQBmMj91x/TSEAc2x7gijDdqTl7SFj5gcJp4uLc/wCVcRn+CXIq4aBdXT62QPWrfs3p1hf3rxaxeSWkYTKlcAsfLfaoe/Q8r2ZT5SRg1CpzJlJ0B+2IhmpYSiu0+m2Omao1vpl817bcIKysoU+oODiqkVPJ3bMGeWSRiN9sYpgKg+FcD13qKIinuO7KQt3MLc+EhQfjzPzq10ma6fTprPTpVW5Y8QJGOMdQCfhVN36xkN3fG2P81sjNOttQmhmEgILBsjIoj0PTredNNjS/fuWjjDNIx2jbY5zuOYz7is1qtyus6yO4DC2tk4VLczjqfUnf/wAVG9/q+sp3eJBF9qV2YL7cR2+FWmnaZHZwhActzY9SfM0CQQBRRaqMVKI1ApwAoqIL7UviHJj8DUm3QUjZ6UR0dxcKMLPKB6OanTUL5Pq3cw/rzQ6cQFKBVBo1nUk5XbH3VT+VdQbDakoiY8+VIfWnEUhI4d6jSGQA9KDltw5O1H7eVJgHpQUsun5oSWwx0rSMoHQVE6qf3RQZWSzIPKh5LYitU9up5gUM1ojtgCrqYzDQkdKTueuK0p05PSmPp6+lBnO6NL3OelXjWAHQUq6cD5UFKlrnGaJiseKriLT16EUWlmFA3FRVVBpcZwWXNWUFjFHjhiAPnii1h4TipVUigYiFRUi7V2d6XNB2aQ0vFkgYFdQIM1xJrjg+dITtVQqk+QxTjTVpc7UC5rqRW6YrqI//2Q=='
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

class App extends React.Component {
  state = {
    activeTab: 1,
    currentOwner: 1,
    owners: testOwner
  }

  getNextId = () =>
  //gets the max id from the isssues of the current user
  Math.max(...this.getCurrentOwner().cars.map(car => car.id)) + 1

  addNewCarForOwner = (newInfo) => {
    let owners = {...this.state.owners}

    owners[this.state.currentOwner].cars.push(newInfo)

    this.setState({owners})
  }

  toggleTab = () => {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <h1>Log</h1>
        </div>

      )
    }
    else if (this.state.activeTab === 1) {
      return (
        <div>

          <h1>Dashboard</h1>
          <CarForm addNewCar={this.addNewCarForOwner} />
          <FABButton ripple>
            <Icon name="+" />
          </FABButton>
          {ownerCars(this.getCurrentOwner())}
        </div>
      )
    }

  }
  getCurrentOwner = () =>
    this.state.owners[this.state.currentOwner]

  getAllOwners = () =>
    Object.values(this.state.owners)

  render = () => (
    <div style={{ height: '789px', position: 'relative' }}>
      <Layout>
        <Header title="MotorBoard" className='header-color' scroll>
          <Navigation>
            <a href="#" style={{ marginTop: '14px' }}><i class="fa fa-cog fa-2x" aria-hidden="true"></i></a>
            <a href="#" style={{ marginTop: '14px' }}><i class="fa fa-home fa-2x" aria-hidden="true"></i></a>
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
