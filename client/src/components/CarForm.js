import React, { Component } from 'react'

export default class CarForm extends Component {

    render() {
        return (
                <form>
                  <label>Image</label>
                  <input type='text' name='image_url' placeholder='Insert URL here' />
                  <label>Nickname</label>
                  <input type='text' name='nickname' placeholder='What did you name it?' />
                  <label>Year</label>
                  <input type='number' name='year' placeholder='What year is it?' />
                  <label>Make</label>
                  <input type='text' name='make' placeholder='What is the make?' />
                  <label>Model</label>
                  <input type='text' name='model' placeholder='What is the model?' />
                  <input type='submit' value='Add Car' />
                </form>
        )
    }
}