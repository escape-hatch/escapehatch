import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router';
import { logout } from '../reducer/user';
import SearchBar from './SearchBar';
import base64url from 'base64-url';


// Component //

const Main = props => {

  const { children, handleClick, loggedIn } = props;

  return (
    <div>
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
      { children }
      <SearchBar
        handleSubmit={ (val) => {
          const userErr = base64url.encode(val);
          console.log(userErr);
          return (<Redirect push to={`/links/${userErr}`} />);
        }}
      />
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
