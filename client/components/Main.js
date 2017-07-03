import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../reducer/user';
<<<<<<< HEAD
import SearchBar from './SearchBar';


=======
import scssMain from './scss/Main.scss';
>>>>>>> master
// Component //

const Main = props => {

  const { children, handleClick, loggedIn, email } = props;

  return (
    <div>
<<<<<<< HEAD
      <h3>Nav Bar</h3>
      <h3>Escape Hatch</h3>
      { loggedIn ?
          <nav>
            <Link to="/home">Home</Link>
            <a href="#" onClick={handleClick}>Logout</a>
          </nav> :
          <nav>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </nav>
      }
      <hr />
      <SearchBar />
      { children }
=======

      <div className="panel panel-default">
              <div className="panel-heading nav navbar-default">
                  <div className="navBar row">
                      <div className="col-xs-4">
                          <h2 className="panel-title"><a href="#" className="">Escape Hatch</a></h2>

                      </div>
                    <div className="col-xs-3"></div>
                      <div className="col-xs-5">
                          <ul className="nav navbar-nav navbar-right">
                              <li><Link to="/">Home</Link></li>
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
          { children }
>>>>>>> master
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
