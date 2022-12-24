import React from 'react';
import { render,  cleanup, fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import UserSignupPage from '../UserSignupPage';

beforeEach(cleanup);

describe('UserSignupPage', () => {
  describe('Layout', () => {

    it('has header of Sign Up', () => {
      const { container } = render(<UserSignupPage />);
      const header = container.querySelector('h1');
      expect(header).toHaveTextContent('Sign Up');
    });

    it('has input for display name', () => {
      const { queryByPlaceholderText } = render(<UserSignupPage />);
      const displayNameInput = queryByPlaceholderText('Your display name');
      expect(displayNameInput).toBeInTheDocument();
    });

    it('has input for display name', () => {
      const { queryByPlaceholderText } = render(<UserSignupPage />);
      const usernameInput = queryByPlaceholderText('Your username');
      expect(usernameInput).toBeInTheDocument();
    });

    it('has input for password', () => {
      const { queryByPlaceholderText } = render(<UserSignupPage />);
      const passwordInput = queryByPlaceholderText('Your password');
      expect(passwordInput).toBeInTheDocument();
    });

    it('has password type for password input', () => {
      const { queryByPlaceholderText } = render(<UserSignupPage />);
      const passwordInput = queryByPlaceholderText('Your password');
      expect(passwordInput.type).toBe('password');
    });

    it('has input for password confirmation', () => {
      const { queryByPlaceholderText } = render(<UserSignupPage />);
      const confirmPasswordInput = queryByPlaceholderText('Confirm password');
      expect(confirmPasswordInput).toBeInTheDocument();
    });

    it('has password type for password confirmation input', () => {
      const { queryByPlaceholderText } = render(<UserSignupPage />);
      const confirmPasswordInput = queryByPlaceholderText('Confirm password');
      expect(confirmPasswordInput.type).toBe('password');
    });

    it('has sumbit button', () => {
      const { container } = render(<UserSignupPage />);
      const button = container.querySelector('button');
      expect(button).toBeInTheDocument();
    });

    // My tests 
    it('has button with a type of submit', () => {
      const { container } = render(<UserSignupPage />);
      const button = container.querySelector('button');
      expect(button.type).toBe('submit');
    });

    // it('should have a `<form>` element', () => {
    //   const { container } = render(<UserSignupPage />);
    //   const form = container.querySelector('form');
    //   expect(form).toHaveLength(1);
    // });

  });

  // Integration testing
  describe('Interactions', () => {

    // Create a function
    const changeEvent = (content) => {
      return {
        target: {
          value: content
        }
      };
    };

    let button, displayNameInput, usernameInput, passwordInput, confirmPasswordInput;

    const setupForSubmit = (props) => {
      const rendered = render(
        <UserSignupPage {...props} />
      );

      const { container, queryByPlaceholderText } = rendered;

      // field containers and query (placeholder text)
      displayNameInput = queryByPlaceholderText('Your display name');
      usernameInput = queryByPlaceholderText('Your username');
      passwordInput = queryByPlaceholderText('Your password');
      confirmPasswordInput = queryByPlaceholderText('Confirm password');
      // Create the change for the fireEvent
      fireEvent.change(displayNameInput, changeEvent('my-display-name'));
      fireEvent.change(usernameInput, changeEvent('my-user-name'));
      fireEvent.change(passwordInput, changeEvent('P4ssword'));
      fireEvent.change(confirmPasswordInput, changeEvent('P4ssword'));

      // Grab button
      button = container.querySelector('button');

      return rendered;
    }

    it('sets the diplayName value into state', () => {
      const { queryByPlaceholderText } = render(<UserSignupPage />);
      const displayNameInput = queryByPlaceholderText('Your display name');

      fireEvent.change(displayNameInput, changeEvent('my-display-name'));

      expect(displayNameInput).toHaveValue('my-display-name');
    });

    it('sets the username value into state', () => {
      const { queryByPlaceholderText } = render(<UserSignupPage />);
      const usernameInput = queryByPlaceholderText('Your username');

      fireEvent.change(usernameInput, changeEvent('my-user-name'));

      expect(usernameInput).toHaveValue('my-user-name');
    });

    it('sets the password value into state', () => {
      const { queryByPlaceholderText } = render(<UserSignupPage />);
      const passwordInput = queryByPlaceholderText('Your password');

      fireEvent.change(passwordInput, changeEvent('P4ssword'));

      expect(passwordInput).toHaveValue('P4ssword');
    });

    it('sets the password confirmation value into state', () => {
      const { queryByPlaceholderText } = render(<UserSignupPage />);
      const confirmPasswordInput = queryByPlaceholderText('Confirm password');

      fireEvent.change(confirmPasswordInput, changeEvent('P4ssword'));

      expect(confirmPasswordInput).toHaveValue('P4ssword');
    });

    // Mocking call to the backend
    it('calls postSignup when the fields are valid and the actions are provided in props', () => {
      // Mock function
      const actions = {
        // resolved for a successful result in JSON
        postSignup: jest.fn().mockResolvedValueOnce({})
      };
      setupForSubmit({ actions });
      // Click button
      fireEvent.click(button);
      // Assertion
      expect(actions.postSignup).toHaveBeenCalledTimes(1);
    });

    it('does not throw exception when clicking the button when actions are provide in props', () => {
      setupForSubmit();
      expect(() => fireEvent.click(button)).not.toThrow();
    });

    it('calls post with user body when the fields are valid', () => {
      const actions = {
        postSignup: jest.fn().mockResolvedValueOnce({})
      };
      setupForSubmit({ actions });
      fireEvent.click(button);
      const expectedUserObject = {
        username: 'my-user-name',
        displayName: 'my-display-name',
        password: 'P4ssword',
      }
      expect(actions.postSignup).toHaveBeenCalledWith(expectedUserObject);
    });

  });

});


