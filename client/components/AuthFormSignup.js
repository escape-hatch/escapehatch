import React from 'react';
import PropTypes from 'prop-types';
import signupLoginScss from './scss/SignupLogin.scss';
import AuthFormButtons from './AuthFormButtons';

const AuthFormSignup = props => {

  const { name, displayName, handleSignupSubmit, error, prevPath } = props;

  return (
  <div className="container">
    <div className="row justify-content-between">
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">Sign Up</h3>
        </div>
      <div className="panel-body">
        <div className="col-md-4" id="legend">
          <form className="form-horizontal" onSubmit={handleSignupSubmit} name={name}>
          <fieldset>
            <div className="control-group">
              <label className="control-label" htmlFor="firstName">First Name</label>
              <div className="controls">
                <input type="text" id="firstName" name="firstName" placeholder="" className="form-control input-lg" />
              </div>
            </div>

          <div className="control-group">
            <label className="control-label" htmlFor="lastName">Last Name</label>
            <div className="controls">
              <input type="text" id="lastName" name="lastName" placeholder="" className="form-control input-lg" />
            </div>
          </div>

          <div className="control-group">
            <label className="control-label" htmlFor="email">E-mail</label>
            <div className="controls">
              <input type="text" id="email" name="email" placeholder="" className="form-control input-lg"/>
              <p className="help-block">Please provide your E-mail</p>
            </div>
          </div>

          <div className="control-group">
            <label className="control-label" htmlFor="password">Password</label>
            <div className="controls">
              <input type="text" id="password" name="password" type="password" className="form-control input-lg"/>
              <p className="help-block">Password should be at least 6 characters</p>
            </div>
          </div>

          <div className="control-group">
            <div className="controls">
              <button className="btn btn-success btn-lg" type="submit">{ displayName }</button>
            </div>
          </div>
        </fieldset>
        { error &&  <div> { error.response.data } </div> }
      </form>
    </div>
    <div className="col-md-2" />
      <div className="col-md-4 center-block">
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
  </div>
  </div>
  </div>
  </div>
  );
};

export default AuthFormSignup;

AuthFormSignup.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSignupSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
};
