import React, { Component } from 'react';
import Input from '../components/Input';

import './UserSignupPage.css'

export class UserSignupPage extends Component {

  state = {
    displayName: '',
    username: '',
    password: '',
    passwordRepeat: '',
    pendingApiCall: false, 
    errors: {},
    passwordRepeatConfirmed: true
  }

  onChangeDisplayName = (event) => {
    const value = event.target.value;
    const errors = { ...this.state.errors };
    delete errors.displayName;
    this.setState({displayName: value, errors})
  };

  onChangeUsername = (event) => {
    const value = event.target.value;
    const errors = { ...this.state.errors };
    delete errors.username;
    this.setState({username: value, errors})
  };

  onChangePassword = (event) => {
    const value = event.target.value;
    const passwordRepeatConfirmed = this.state.passwordRepeat === value;
    const errors = { ...this.state.errors };
    delete errors.password;
    errors.passwordRepeat = passwordRepeatConfirmed ? '' : 'Does not match to password';
    this.setState({password: value, passwordRepeatConfirmed, errors})
  };

  onChangePasswordRepeat = (event) => {
    const value = event.target.value;
    const passwordRepeatConfirmed = this.state.password === value;
    const errors = { ...this.state.errors };
    errors.passwordRepeat = passwordRepeatConfirmed ? '' : 'Does not match to password';
    this.setState({passwordRepeat: value, passwordRepeatConfirmed, errors})
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
      .catch((apiError) => {
        let errors = { ...this.state.errors }
        if (apiError.response.data && apiError.response.data.validationErrors) {
          errors = { ...apiError.response.data.validationErrors }
        }
        this.setState({ pendingApiCall: false, errors });
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
              <Input 
                label='Enter your display name' 
                id='displayName' 
                placeholder='Your display name' 
                value={this.state.displayName} 
                onChange={this.onChangeDisplayName} 
                hasError={this.state.errors.displayName && true} 
                error={this.state.errors.displayName}
              />
            </div>

            <div className='col-12 mb-3'>
              <Input 
                label='Enter your username'  
                id='username' 
                placeholder='Your username' 
                value={this.state.username} 
                onChange={this.onChangeUsername}
                hasError={this.state.errors.username && true} 
                error={this.state.errors.username}
              />
            </div>

            <div className='col-12 mb-3'>
              <Input 
                label='Enter a password' 
                type='password'
                id='password' 
                placeholder='Your password' 
                value={this.state.password} 
                onChange={this.onChangePassword}
                hasError={this.state.errors.password && true} 
                error={this.state.errors.password}
              />
            </div>
            <div className='col-12 mb-3'>
              <Input 
                label='Confirm your password' 
                type='password'
                id='password' 
                placeholder='Repeat your password' 
                value={this.state.passwordRepeat} 
                onChange={this.onChangePasswordRepeat} 
                hasError={this.state.errors.passwordRepeat && true} 
                error={this.state.errors.passwordRepeat}
              />
            </div>

          </fieldset>

          <div className='text-center'>
            <button 
              className='btn btn-primary'
              type='submit'
              onClick={this.onClickSignup} 
              disabled={this.state.pendingApiCall || !this.state.passwordRepeatConfirmed}
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