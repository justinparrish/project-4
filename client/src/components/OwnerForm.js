import React, { Component } from 'react'

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
            <form onSubmit={this.handleSubmit}>
              <label>Username</label>
              <input type='text' name='username' placeholder='Username Here' onChange={this.handleInput} />
              <label>Email</label>
              <input type='email' name='email' placeholder='Email Here' onChange={this.handleInput}/>
              <input type='submit' value='Add' />
            </form>
          )
    }
}