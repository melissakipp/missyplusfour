import React, { Component } from 'react';

import './UserSignupPage.css'

export class UserSignupPage extends Component {

  state = {
    displayName: '',
    username: '',
    password: '',
    passwordRepeat: '',
    pendingApiCall: false
  }

  onChangeDisplayName = (event) => {
    const value = event.target.value;
    this.setState({displayName: value})
  };

  onChangeUsername = (event) => {
    const value = event.target.value;
    this.setState({username: value})
  };

  onChangePassword = (event) => {
    const value = event.target.value;
    this.setState({password: value})
  };

  onChangePasswordRepeat = (event) => {
    const value = event.target.value;
    this.setState({passwordRepeat: value})
  };

  onClickSignup = () => {
    const user = {
      username: this.state.username,
      displayName: this.state.displayName,
      password: this.state.password
    }
    this.setState({pendingApiCall: true})
    this.props.actions
      .postSignup(user)
      .then((response) => {
      this.setState({ pendingApiCall: false });
      })
      .catch((error) => {
        this.setState({ pendingApiCall: false });
      });
  }

  render() {
    return (
      <main>
        <div className='container form__signup'>
        <h1 className='text-center'>Sign Up</h1>

        <form>
          <fieldset>
            <div className='col-12 mb-3'>
              <label htmlFor='displayName'>Enter your display name</label>
              <input 
                type='text' 
                className='form-control' 
                id='displayName' 
                placeholder='Your display name' 
                value={this.state.displayName} 
                onChange={this.onChangeDisplayName} 
              />
            </div>

            <div className='col-12 mb-3'>
              <label htmlFor='username'>Enter your username</label>
              <input 
                type='text' 
                className='form-control' 
                id='username' 
                placeholder='Your username' 
                value={this.state.username} 
                onChange={this.onChangeUsername}
              />
            </div>

            <div className='col-12 mb-3'>
              <label htmlFor='password'>Enter a password</label>
              <input 
                type='password' 
                className='form-control' 
                id='password' 
                placeholder='Your password' 
                value={this.state.password} 
                onChange={this.onChangePassword}
              />
            </div>
            <div className='col-12 mb-3'>
              <label htmlFor='password'>Confirm your password</label>
              <input 
                type='password' 
                className='form-control' 
                id='password' 
                placeholder='Repeat your password' 
                value={this.state.passwordRepeat} 
                onChange={this.onChangePasswordRepeat} 
              />
            </div>

          </fieldset>

          <div className='text-center'>
            <button 
              className='btn btn-primary'
              type='submit'
              onClick={this.onClickSignup} 
              disabled={this.state.pendingApiCall}
            >
            {this.state.pendingApiCall && (<div className='spinner-border text-light spinner-border-sm mr-sm-1' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>)}
              Sign Up
            </button>
          </div>

        </form>
        </div>
      </main>
    );
  }
}

UserSignupPage.defaultProps = {
  actions: {
    postSignup: () =>
      new Promise((resolve, reject) => {
        resolve({});
      })
  }
};

export default UserSignupPage;