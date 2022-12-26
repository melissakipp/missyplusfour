import { Component } from "react";

import { Button } from "../../components/ui/Button";

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
      <main className="">        
      <div className="">
          <div className="">
            {/* <h1>Sign Up</h1> */}
            <form className="">
            <legend className="">Sign Up</legend>
            <label className="" htmlFor="displayName">Enter your display name</label>
            <input 
              name="displayName" 
              className=""
              id="formDisplayName" 
              value={this.state.displayName} 
              onChange={this.onChangeDisplayName} 
              placeholder="Your display name" 
            />
            
            <label className="" htmlFor="username">Enter a username</label>
            <input 
              name="username" 
              className=""
              id="formUsername" 
              value={this.state.username} 
              onChange={this.onChangeUsername} 
              placeholder="Your username" 
            />
            
            <label className="" htmlFor="password">Enter a password</label>
            <input 
              name="password" 
              className=""
              id="formPassword" 
              type="password" 
              value={this.state.password}
              onChange={this.onChangePassword}
              placeholder="Your password" 
            />

            <label className="" htmlFor="confirmPassword">Confirm  password</label>
            <input 
              name="confirmPassword" 
              className=""
              id="formConfirmPassword" 
              type="password" 
              value={this.state.confirmPassword}
              onChange={this.onChangeConfirmPassword}
              placeholder="Confirm password" 
            />

            <div className="">
              <Button 
                buttonStyle="btn--primary--solid"
                onClick={this.onClickSignup} 
                type="submit"
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