import React, { useState } from 'react';
import Input from '../components/Input';
import ButtonWithProgress from '../components/ButtonWithProgress';
import { connect } from 'react-redux';
import * as authActions from '../redux/authActions';

import './UserSignupPage.css';

// import Button from 'react-bootstrap/Button';
import { BsFillPersonFill, BsFillDisplayFill } from 'react-icons/bs';
import { MdPassword } from 'react-icons/md';

export const UserSignupPage = (props) =>  {
  const [form, setForm] = useState({
    displayName: '',
    username: '',
    password: '',
    passwordRepeat: ''
  });
  const [errors, setErrors] = useState({});
  const [pendingApiCall, setPendingApiCall] = useState(false);

  const onChange = (event) => {
    const { value, name } = event.target;

    setForm((previousForm) => {
      return {
        ...previousForm,
        [name]: value
      };
    });

    setErrors((previousErrors) => {
      return {
        ...previousErrors,
        [name]: undefined
      };
    });
  };

  const onClickSignup = () => {
    const user = {
      username: form.username,
      displayName: form.displayName,
      password: form.password
    };
    setPendingApiCall(true);
    props.actions
      .postSignup(user)
      .then((response) => {
        setPendingApiCall(false);
        props.history.push('/');
      })
      .catch((apiError) => {
        if (apiError.response.data && apiError.response.data.validationErrors) {
          setErrors(apiError.response.data.validationErrors);
        }
        setPendingApiCall(false);
      });
  };

  let passwordRepeatError;
  const { password, passwordRepeat } = form;
  if (password || passwordRepeat) {
    passwordRepeatError =
      password === passwordRepeat ? '' : 'Does not match to password';
  }


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
              <button
                type='submit'
                // onClick={onClickSignup}
              >
                Sign Up
              </button>
            </div>
        </form>
        </div>
      </div>
    </main>
    );
}

UserSignupPage.defaultProps = {
  actions: {
    postSignup: () =>
      new Promise((resolve, reject) => {
        resolve({});
      })
  },
  history: {
    push: () => {}
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      postSignup: (user) => dispatch(authActions.signupHandler(user))
    }
  };
};

export default connect(null, mapDispatchToProps)(UserSignupPage);