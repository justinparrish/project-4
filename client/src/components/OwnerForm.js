import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'

export default class OwnerForm extends Component {
    state = {
        username: '',
        email: ''
    }

    handleInput = (evnt) => {
        let state = {...this.state}

        state[evnt.target.name] = evnt.target.value

        this.setState( state )
    }

    handleSubmit = (evnt) => {
        evnt.preventDefault()

        this.props.addNewOwner( this.state )
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} layout='horizontal'>
              <Form.Item label='Username'>
              <Input type='text' name='username' placeholder='Username Here' onChange={this.handleInput} />
              </Form.Item>
              <Form.Item label='Email'>
              <Input type='email' name='email' placeholder='Email Here' onChange={this.handleInput}/>
              </Form.Item>
              <Button type='primary' htmlType='submit'>New Owner</Button>
            </Form>
          )
    }
}