import { Component } from 'react';

import './UserSignupPage.css';

import Button from 'react-bootstrap/Button';
import { BsFillPersonFill, BsFillDisplayFill } from 'react-icons/bs';
import { MdPassword } from 'react-icons/md'

export class UserSignupPage extends Component {

  // State
  state = {
    displayName: '',
    username: '',
    password: '',
    confirmPassword: '',
  }

  // Callback function that handles the changes in the form (capture the updates for the state)
  onChangeDisplayName = (event) => {
    const value = event.target.value;
    this.setState({ displayName: value });
  };

  onChangeUsername = (event) => {
    const value = event.target.value;
    this.setState({ username: value });
  };

  onChangePassword = (event) => {
    const value = event.target.value;
    this.setState({ password: value });
  };

  onChangeConfirmPassword = (event) => {
    const value = event.target.value;
    this.setState({ confirmPassword: value });
  };

  onClickSignup = () => {
    const user = {
      username: this.state.username,
      displayName: this.state.displayName,
      password: this.state.password
    };
    this.props.actions.postSignup(user); 
  };

  render() {
    return (
      <main>        
        <div className='form-container'>
        <h1 className='mt-3 text-center mb-3'>Sign Up</h1>
        <div className='form-signup'>
          <form className=''>
            <fieldset className='container-sm'>
              <label className='visually-hidden' htmlFor='displayName'>Enter your display name</label>
              <div className='mb-4 input-group'>
                <span className='input-group-text'>
                  <BsFillPersonFill title='person icon' />
                </span>
                <input 
                  name='displayName' 
                  className='form-control'
                  id='formDisplayName' 
                  value={this.state.displayName} 
                  onChange={this.onChangeDisplayName} 
                  placeholder='Your display name' 
                />
              </div>
              
              <label className='visually-hidden' htmlFor='username'>Enter a username</label>
              <div className='mb-4 input-group'>
                <span className='input-group-text'>
                  <BsFillDisplayFill title='monitor icon' />
                </span>
                <input 
                  name='username' 
                  className='form-control'
                  id='formUsername' 
                  value={this.state.username} 
                  onChange={this.onChangeUsername} 
                  placeholder='Your username' 
                />
              </div>
              
              <label className='visually-hidden' htmlFor='password'>Enter a password</label>
              <div className='mb-4 input-group'>
                <span className='input-group-text'>
                  <MdPassword title='password icon' />
                </span>
                <input 
                  name='password' 
                  className='form-control'
                  id='formPassword' 
                  type='password' 
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  placeholder='Your password' 
                />
              </div>

              <label className='visually-hidden' htmlFor='confirmPassword'>Confirm  password</label>
              <div className='mb-4 input-group'>
                <span className='input-group-text'>
                  <MdPassword title='password icon' />
                </span>
                <input 
                  name='confirmPassword' 
                  className='form-control'
                  id='formConfirmPassword' 
                  type='password' 
                  value={this.state.confirmPassword}
                  onChange={this.onChangeConfirmPassword}
                  placeholder='Confirm password' 
                />
              </div>

            </fieldset>


            <div className='text-center mt-3'>
              <Button
                type='submit'
                // onClick={onClickSignup}
              >
                Sign Up
              </Button>
            </div>
        </form>
        </div>
      </div>
    </main>
    );
  }
}

UserSignupPage.defaultProps = {
    actions: {
        postSignup: () =>
            new Promise((resolve, reject) => {
                resolve({})
            })
    }
}

export default UserSignupPage;