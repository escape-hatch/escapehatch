import React from 'react';
import PropTypes from 'prop-types';
import signupLoginScss from './scss/SignupLogin.scss';

const AuthFormSignup = props => {

  const { name, displayName, handleSignupSubmit, error, prevPath } = props;

  return (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
          <div id="legend">
            <img src="img/loginSignup.png" />
            <legend className="">Sign Up </legend>
          </div>
        <form
          className="form-horizontal"
          onSubmit={values =>
          { handleSignupSubmit(values, props.prevPath.pathname); } }
          name={name}>
        <fieldset>

          <div className="control-group">
            <div className="controls">
              <input type="text" id="firstName" name="firstName" placeholder="First Name" className="form-control input-lg" />
            </div>
          </div>

          <div className="control-group">
            <div className="controls">
              <input type="text" id="lastName" name="lastName" placeholder="Last Name" className="form-control input-lg" />
            </div>
          </div>

          <div className="control-group">
            <div className="controls">
              <input type="text" id="email" name="email" placeholder="E-mail" className="form-control input-lg" />
            </div>
          </div>

          <div className="control-group">
            <div className="controls">
              <input type="text" id="password" name="password" type="password" className="form-control input-lg" placeholder="Password" />
            <label className="control-label" htmlFor="password">Password should be at least 6 characters</label>
            </div>
          </div>

          <div className="control-group">
            <div className="controls">
              <button className="btn btn-success btn-lg"type="submit">{ displayName }</button>
            </div>
          </div>
        </fieldset>
        { error &&  <div> { error.response.data } </div> }
      </form>
      </div>

      <div className="col-md-12">
          <a href={'/auth/google?returnTo=' + prevPath.pathname} className="btn btn-block btn-social btn-google">
            <span className= "fa fa-google" /> { displayName } with Google</a>
          <br />
          <a href={'/auth/github?returnTo=' + prevPath.pathname}  className="btn btn-block btn-social btn-github">
            <span className= "fa fa-github" /> { displayName } with GitHub</a>
          <br />
          <a href={'/auth/stack?returnTo=' + prevPath.pathname}  className="btn btn-block btn-social btn-stackExchange">
        <span className= "fa fa-stack-exchange" />{ displayName } with StackExchange</a>
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
