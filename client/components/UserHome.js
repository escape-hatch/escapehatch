import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const UserHome = props => {
  const { firstName, email } = props;

  return (
    <div>
      {
        firstName ?
          <h3>Welcome, { firstName }!</h3> :
          email ?
            <h3>Welcome, { email }!</h3> :
            <h3>Welcome!</h3>
      }
    </div>
  );
};

const mapState = ({ user }) => ({
  firstName: user.firstName,
  email: user.email,
});

export default connect(mapState)(UserHome);

UserHome.propTypes = {
  email: PropTypes.string
};
