import React from 'react';
import { connect } from 'react-redux';
import cssLinks from './Links.css';

// Component //
const Links = props => {
  const links = props.currentLinks
  console.log("links", links);

  // const utcSeconds = { l.last_activity_date };
  // const d = new Date(0); // The 0 there is the key, which sets the date to the epoch
  // d.setUTCSeconds(utcSeconds);

  // console.log("d:", d);

  return (
    <div>
      <h1>Search Results Page</h1>
      <p>***Search results error to be placed here ***</p>
      <ul>
      {
        links && links.map(l => (
        <li key={ l.question_id }>

          <p><strong>Title: </strong><a href={l.link}>{l.title} </a></p>

          <p>Last Activity Date: { new Date(l.last_activity_date * 1e3).toLocaleDateString() }</p>

          <span>{l.view_count} Views</span>
          <span className="score"><strong>Score:</strong> {l.score}</span>
        </li>
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

  // currentLinks: state.link.currentLinks.sort((a, b) => {
  //   return a.view_count > b.view_count ? -1 : 1;
  // })
