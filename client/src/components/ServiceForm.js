import React, { Component } from 'react'

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
            <form onSubmit={this.handleSubmit}>
                <label>Dealership</label>
                <input type='text' name='dealership' placeholder='Where was it serviced?' onChange={this.handleInput} />
                <label>Location</label>
                <input type='text' name='location' placeholder='Where was it located?' onChange={this.handleInput} />
                <label>Service</label>
                <input type='text' name='service' placeholder='What service did you have done?' onChange={this.handleInput} />
                <label>Mileage</label>
                <input type='number' name='mileage' placeholder='Miles after service' onChange={this.handleInput} />
                <label>Price</label>
                <input type='number' name='price' placeholder='How much it cost?' onChange={this.handleInput} />
                <label>Date</label>
                <input type='date' name='date' placeholder='When was it serviced?' onChange={this.handleInput} />
                <label>Note</label>
                <input type='text' name='note' placeholder='Additional notes...' onChange={this.handleInput} />
                <input type='submit' value='Add Service' />
            </form>
        )
    }
}