import React from 'react';
import PropTypes from 'prop-types';
import signupLoginScss from './scss/SignupLogin.scss';


const AuthFormButtons = props => {

  const { displayName, prevPath } = props;

  return (
      <div className="col-md-12 center-block">
        <div className="row align-items-center">
            <a href={'/auth/google?returnTo=' + prevPath.pathname} className="btn btn-block btn-social btn-google">
              <span className= "fa fa-google" /> { displayName } with Google</a>
            <br />
            <a href={'/auth/github?returnTo=' + prevPath.pathname}  className="btn btn-block btn-social btn-github">
              <span className= "fa fa-github" /> { displayName } with GitHub</a>
            <br />
            <a href={'/auth/stack?returnTo=' + prevPath.pathname}  className="btn btn-block btn-social btn-facebook">{ displayName } with StackExchange</a>
        </div>
    </div>
  );
};

export default AuthFormButtons;

AuthFormButtons.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSignupSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
};
