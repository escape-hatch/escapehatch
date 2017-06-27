import React from 'react';
import { connect } from 'react-redux';

// Component //
const Links = props => {
  const links = props.currentLinks
  return (
    <div>
      <h1>Search Results Page</h1>
      <p>Search results for error message Cannot read property 'be' of undefined</p>
      <ul>
      {
        links && links.map(l => (
        <li key={l.id}>{l.link}</li>
      ))
      }
      </ul>
    </div>
  )
}

// Container //
const mapState = (state) => ({
  currentLinks: state.link.currentLinks
});

export default connect(mapState)(Links)
