import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Form, Input, Button } from 'antd'

export default class CarForm extends Component {
  state = {
    image_url: '',
    nickname: '',
    year: '',
    make: '',
    model: '',
    
  }

  handleInput = (evnt) => {
    let state = { ...this.state }

    state[evnt.target.name] = evnt.target.value

    this.setState(state)
  }

  handleSubmit = (evnt) => {
    evnt.preventDefault()

    this.props.addNewCar(this.state)
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} layout='inline'>
        <Form.Item label='Image'>
          <Input type='text' name='image_url' placeholder='Insert URL here' onChange={this.handleInput} />
        </Form.Item>
        <Form.Item label='Nickname'>
          <Input type='text' name='nickname' placeholder='What did you name it?' onChange={this.handleInput} />
        </Form.Item>
        <Form.Item label='Year'>
          <Input type='number' name='year' placeholder='What year is it?' onChange={this.handleInput} />
        </Form.Item>
        <Form.Item label='Make'>
          <Input type='text' name='make' placeholder='What is the make?' onChange={this.handleInput} />
        </Form.Item>
        <Form.Item label='Model'>
          <Input type='text' name='model' placeholder='What is the model?' onChange={this.handleInput} />
        </Form.Item>
        <Button type='primary' htmlType='submit'>Add Car</Button>
      </Form>
    )
  }
}