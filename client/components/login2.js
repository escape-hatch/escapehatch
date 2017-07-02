import React from 'react';
import PropTypes from 'prop-types';

const AuthFormLogin = props => {

  const { name, displayName, handleLoginSubmit, error } = props;

  return (
    <div>
      <form onSubmit={handleLoginSubmit} name={name}>
        <div>
          <label htmlFor="email"><small>Email</small></label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password"><small>Password</small></label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">{ displayName }</button>
        </div>
        { error &&  <div> { error.response.data } </div> }
      </form>
      <a href="/auth/google">{ displayName } with Google</a>
    </div>
  );
};

export default AuthFormLogin;

AuthFormLogin.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleLoginSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
};
