import React from 'react';
import PropTypes from 'prop-types';
import signupLoginScss from './scss/SignupLogin.scss';

const AuthFormLogin = props => {

  const { name, displayName, handleLoginSubmit, error, prevPath } = props;

  return (

  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <form className="form-horizontal" onSubmit={handleLoginSubmit} name={name}>
        <fieldset>
          <div id="legend">
            <img src="img/loginSignup.png"/>
            <legend className="">Log In</legend>
          </div>

          <div className="control-group">
            <div className="controls">
              <input type="text" id="email" name="email" placeholder="E-mail" className="form-control input-lg" />
            </div>
          </div>

          <div className="control-group">
            <label className="control-label" htmlFor="password">Password</label>
            <div className="controls">
              <input type="text" id="password" name="password" placeholder="Password" className="form-control input-lg" type="password" />
            </div>
          </div>
          <div className="control-group">
            <div className="controls">
              <button className="btn btn-success btn-lg"type="submit">{ displayName }</button>
            </div>
          </div>
        { error &&  <div> { error.response.data } </div> }
        <a href={'/auth/google?returnTo=' + prevPath.pathname} className="btn btn-block btn-social btn-google"> <span className= "fa fa-google" /> { displayName } with Google</a>
        <br />
          <a href={'/auth/github?returnTo=' + prevPath.pathname} className="btn btn-block btn-social btn-github"><span className= "fa fa-github" /> { displayName } with GitHub</a>
        <br />
          <a href={'/auth/stack?returnTo=' + prevPath.pathname} className="btn btn-block btn-social btn-stackExchange">
            <span className= "fa fa-stack-exchange" />{ displayName } with StackExchange</a>
        </fieldset>
      </form>
      </div>
    </div>
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
