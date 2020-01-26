import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/loginUserActions';
import { useHistory } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

function LoginForm({ loginUser, loggedIn, error }) {
  const history = useHistory();
  const [formState, setFormState] = useState({
    userName: '',
    userPassword: ''
  });
  let errorMsg = '';

  const handleChange = useCallback(
    event => {
      const { name, value } = event.target;

      setFormState(prevFormState => ({
        ...prevFormState,
        [name]: value
      }));
    },
    [setFormState]
  );

  const handleSubmit = event => {
    event.preventDefault();
    const user = {
      ...formState,
      userPassword: +formState.userPassword
    };
    loginUser(user);
  };

  if (loggedIn) {
    setTimeout(() => {
      history.push('/profile');
    }, 100);
  }

  if (error) {
    errorMsg = <Alert variant="danger">{error}</Alert>;
  }

  const { userName, userPassword } = formState;
  return (
    <form onSubmit={handleSubmit} className="container-sm w-50 p-3">
      <h1 className="text-center p-3">Login From</h1>
      {errorMsg}
      <div className="form-group">
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          className="form-control"
          id="userName"
          name="userName"
          value={userName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="userPassword">Password</label>
        <input
          type="password"
          className="form-control"
          id="userPassword"
          name="userPassword"
          value={userPassword}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: state.user.loggedIn,
    error: state.user.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: userData => {
      dispatch(loginUser(userData));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
