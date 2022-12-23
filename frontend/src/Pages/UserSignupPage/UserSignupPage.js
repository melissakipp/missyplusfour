import { Component } from "react";

import styles from './UserSignupPage.module.scss';

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
      <>
        <h1>Sign Up</h1>
        <form className="form">
          
        <label className={styles.form__lable} htmlFor="displayName">Enter your display name</label>
        <input 
          name="displayName" 
          id="formDisplayName" 
          value={this.state.displayName} 
          onChange={this.onChangeDisplayName} 
          placeholder="Your display name" 
        />
        
        <label className={styles.form__lable} htmlFor="username">Enter a username</label>
        <input 
          name="username" 
          id="formUsername" 
          value={this.state.username} 
          onChange={this.onChangeUsername} 
          placeholder="Your username" 
        />
        
        <label className={styles.form__lable} htmlFor="password">Enter a password</label>
        <input 
          name="password" 
          id="formPassword" 
          type="password" 
          value={this.state.password}
          onChange={this.onChangePassword}
          placeholder="Your password" 
        />

        <label className={styles.form__lable} htmlFor="confirmPassword">Confirm  password</label>
        <input 
          name="confirmPassword" 
          id="formConfirmPassword" 
          type="password" 
          value={this.state.confirmPassword}
          onChange={this.onChangeConfirmPassword}
          placeholder="Confirm password" 
        />

        <div>
          <button 
            type="submit"
            onClick={this.onClickSignup}
          >
            Sign Up
          </button>
        </div>

        </form>
      </>
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