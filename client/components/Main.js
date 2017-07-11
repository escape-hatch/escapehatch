import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { logout } from '../reducer/user';

import Navbar from './Navbar';
import Footer from './Footer';

import scssMain from './scss/Main.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevPath: {
        pathname: '/home'
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    const routeChanged = nextProps.location !== this.props.location;
    if (routeChanged) this.setState({ prevPath: this.props.location });
  }

  render() {
    const { children, handleClick, loggedIn } = this.props;
    return (
      <div>
        <Navbar handleClick={ handleClick } loggedIn={ loggedIn } />
        { React.cloneElement(children, { ...this.state }) }
        <Footer />
      </div>
    );
  }
}

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
