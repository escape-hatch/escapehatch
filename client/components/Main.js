import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../reducer/user';
import SearchBar from './SearchBar';

import mainCSS from './scss/index.scss';
import scssMain from './scss/Main.scss';

const Main = props => {

  const { children, handleClick, loggedIn, email } = props;

  return (
    <div>

      <div className="panel panel-default header">
        <div className="panel-heading nav navbar-default">
          <div className="navBar row">
              <div className="col-xs-4">
                <h2 className="panel-title"><a href="#" className="">Escape Hatch</a></h2>
              </div>
            <div className="col-xs-3"></div>
              <div className="col-xs-5">
                  <ul className="nav navbar-nav navbar-right">
                      <li className="loginSignup"><Link to="/">Home</Link></li>
                        { loggedIn ?
                      <li className="loginSignup">
                        <span>Welcome!</span>
                        <Link to='/' onClick={() => props.handleClick() } className="logout">Logout</Link>
                      </li>:
                      <li className="loginSignup">
                        <span><Link to="/login">Login</Link></span>
                        <span><Link to="/signup">Sign Up</Link></span>
                      </li>
                      }
                      <hr />
                  </ul>
              </div>
          </div>
        </div>
          </div>
          <SearchBar />
          { children }
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired
};

// Container //

const mapState = ({ user }) => ({
  loggedIn: !!user.id
});

const mapDispatch = dispatch => ({
  handleClick () {
    dispatch(logout());
  }
});

export default connect(mapState, mapDispatch)(Main);
