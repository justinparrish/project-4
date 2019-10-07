import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'

export default class ServiceForm extends Component {
    state = {
        dealership: '',
        location: '',
        service: '',
        mileage: 0,
        price: 0,
        date: '2019-01-01',
        note: ''
    }

    handleInput = (evnt) => {
        let state = {...this.state}

        state[evnt.target.name] = evnt.target.value

        this.setState( state )
    }

    handleSubmit = (evnt) => {
        evnt.preventDefault()

        this.props.addNewServiceHistory( this.state )
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} layout='inline'>
                <Form.Item label='Dealership'>
                <Input type='text' name='dealership' placeholder='Where was it serviced?' onChange={this.handleInput} />
                </Form.Item>
                <Form.Item label='Location'>
                <Input type='text' name='location' placeholder='Where was it located?' onChange={this.handleInput} />
                </Form.Item>
                <Form.Item label='Service'>
                <Input type='text' name='service' placeholder='What service did you have done?' onChange={this.handleInput} />
                </Form.Item>
                <Form.Item label='Mileage'>
                <Input type='number' name='mileage' placeholder='Miles after service' onChange={this.handleInput} />
                </Form.Item>
                <Form.Item label='Price'>
                <Input type='number' name='price' placeholder='How much it cost?' onChange={this.handleInput} />
                </Form.Item>
                <Form.Item label='Date'>
                <Input type='date' name='date' placeholder='When was it serviced?' onChange={this.handleInput} />
                </Form.Item>
                <Form.Item label='Note'>
                <Input type='text' name='note' placeholder='Additional notes...' onChange={this.handleInput} />
                </Form.Item>
                <Button type='primary' htmlType='submit'>Add Service</Button>
            </Form>
        )
    }
}