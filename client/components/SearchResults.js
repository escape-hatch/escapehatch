import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// Component //
const SearchResults = props => {
  return (
    <div>
      <h1>Search Results Page</h1>
      <p>Search results for error message Cannot read property 'be' of undefined</p>
      <ul>
        <li>Result 1</li>
        <li>Result 2</li>
        <li>Result 3</li>
        <li>Result 4</li>
      </ul>
    </div>
  )
}

// Container //
const mapState = (state) => ({});

export default connect(mapState)(SearchResults)
