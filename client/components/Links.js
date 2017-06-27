import React from 'react';
import { connect } from 'react-redux';
// import ReactCSSTransitionGroup from npm
import cssLinks from './Links.css';

// Component //
const Links = props => {
  const links = props.currentLinks
  console.log("links", links);
  return (
    <div>
      <h1>Search Results Page</h1>
      <p>***Search results error to be placed here ***</p>
      <ul>
      {
        links && links.map(l => (
        <li key={ l.question_id }>

          <p><strong>Title: </strong><a href={l.link}>{l.title} </a></p>
          <p><strong>View Count:</strong> {l.view_count}</p>
          <p><strong>Score:</strong> {l.score}</p>
        </li>
      ))
      }
      </ul>
    </div>
  )
}

// Container //
const mapState = (state) => ({
  currentLinks: state.link.currentLinks.sort((a, b) => {
    return a.view_count > b.view_count ? -1 : 1;
  })
});

export default connect(mapState)(Links)

          // <p><strong>Title:</strong> {l.title}</p>
          // <p><strong>Link:</strong> {l.link}</p>
