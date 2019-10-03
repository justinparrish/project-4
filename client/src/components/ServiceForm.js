import React, { Component } from 'react'

export default class ServiceForm extends Component {

    render() {
        return (
            <form>
                <label>Dealership</label>
                <input type='text' name='dealership' placeholder='Where was it serviced?' />
                <label>Location</label>
                <input type='text' name='location' placeholder='Where was it located?' />
                <label>Service</label>
                <input type='text' name='service' placeholder='What service did you have done?' />
                <label>Mileage</label>
                <input type='number' name='mileage' placeholder='Miles after service' />
                <label>Price</label>
                <input type='number' name='price' placeholder='How much it cost?' />
                <label>Date</label>
                <input type='date' name='date' placeholder='When was it serviced?' />
                <label>Note</label>
                <input type='text' name='note' placeholder='Additional notes...' />
                <input type='submit' value='Add Service' />
            </form>
        )
    }
}