import React, { Component } from 'react'

export default class CarForm extends Component {
  state = {
    image_url: '',
    nickname: '',
    year: '',
    make: '',
    model: ''
  }

handleInput = (evnt) => {
  let state = {...this.state}

  state[evnt.target.name] = evnt.target.value

  this.setState( state )
}

handleSubmit = (evnt) => {
  evnt.preventDefault()

  this.props.addNewCar( this.state )
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Image</label>
        <input type='text' name='image_url' placeholder='Insert URL here' onChange={this.handleInput} />
        <label>Nickname</label>
        <input type='text' name='nickname' placeholder='What did you name it?' onChange={this.handleInput} />
        <label>Year</label>
        <input type='number' name='year' placeholder='What year is it?' onChange={this.handleInput} />
        <label>Make</label>
        <input type='text' name='make' placeholder='What is the make?' onChange={this.handleInput} />
        <label>Model</label>
        <input type='text' name='model' placeholder='What is the model?' onChange={this.handleInput} />
        <input type='submit' value='Add Car' />
      </form>
    )
  }
}