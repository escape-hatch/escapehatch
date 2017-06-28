import React from 'react';
import { connect } from 'react-redux';
import cssLinks from './Links.css';

// Component //
const Links = props => {
  const links = props.currentLinks;
  console.log('links', links);
  return (
    <div>
      <h1>Search Results Page</h1>
      <p>***Search results error to be placed here ***</p>
      <ul>
      {
        links && links.map(l => (
        <li key={ l.id }>

          <p><strong>Title: </strong>
            <a href={l.url}>{l.title} </a>
          </p>

          <p>Last Activity Date: { l.updated_on }</p>

          <span>{l.views} Views</span>
          <span className="score"><strong>Score:</strong> {l.score}</span>
        </li>
      ))
      }
      </ul>
    </div>
  );
};

// Container //
const mapState = (state) => ({
  currentLinks: state.link.currentLinks
});

export default connect(mapState)(Links);
