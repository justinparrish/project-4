import React, { Component } from 'react'

export default class OwnerForm extends Component {

    render() {
        return (
            <form>
              <label>Username</label>
              <input type='text' name='username' placeholder='Username Here' />
              <label>Email</label>
              <input type='email' name='email' placeholder='Email Here' />
              <input type='submit' value='Add' />
            </form>
          )
    }
}