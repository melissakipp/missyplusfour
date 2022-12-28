import React, { Component } from 'react';

export class UserSignupPage extends Component {

  state = {
    displayName: '',
    username: '',
    password: '',
    passwordRepeat: ''
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
    this.props.actions.postSignup(user);
  }

  render() {
    return (
      <main>
        <h1>Sign Up</h1>
        <form>
          <fieldset>

            <div>
              <label htmlFor='displayName'>Enter your display name</label>
              <input 
                type='text' 
                id='displayName' 
                placeholder='Your display name' 
                value={this.state.displayName} 
                onChange={this.onChangeDisplayName} 
              />
            </div>

            <div>
              <label htmlFor='username'>Enter your username</label>
              <input 
                type='text' 
                id='username' 
                placeholder='Your username' 
                value={this.state.username} 
                onChange={this.onChangeUsername}
              />
            </div>

            <div>
              <label htmlFor='password'>Enter a password</label>
              <input 
                type='password' 
                id='password' 
                placeholder='Your password' 
                value={this.state.password} 
                onChange={this.onChangePassword}
              />
            </div>
            <div>
              <label htmlFor='password'>Confirm your password</label>
              <input 
                type='password' 
                id='password' 
                placeholder='Repeat your password' 
                value={this.state.passwordRepeat} 
                onChange={this.onChangePasswordRepeat} 
              />
            </div>

          </fieldset>

          <div>
            <button 
              type='submit'
              onClick={this.onClickSignup} 
            >Sign Up</button>
          </div>

        </form>
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