import React from 'react';
import { connect } from 'react-redux';
import cssLinks from './scss/Links.scss';
import { updateVote } from '../reducer/link';

// Component //
class Links extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const stack = this.props.stack;
    const git = this.props.git;
    const error = this.props.error

    return (
      <div className="links">
        <h1>Search Results for { error }</h1>
        <p>Vendor: Github <img src="/img/github-icon.png"/></p>
        <p>Vendor: Stack Overflow <img src="/img/so-icon.png"/></p>
        <ul>
        {
          git && git.map(l => {
            return (
              <li key={ l.vendor_id } className="gitResults">

                <p><strong>Title: </strong>
                  <a href={l.url}>{l.title} </a>
                </p>

                <p>Vendor: { l.vendor }</p>
                <p>Last Activity Date: { l.modified }</p>

                <span>Status: {l.status}</span>
                <span className="score"><strong>Comments:</strong> {l.comments}</span>

                <button className="upvote"  onClick={() => this.props.dispatchUpvote(l)}>Upvote</button>
                <button className="downvote"  onClick={() => this.props.dispatchDownvote(l)}>Downvote</button>
              </li>
            );
          })
        }
        {
          stack && stack.map(l => {
            return (
              <li key={ l.vendor_id } className="stackResults">

                <p><strong>Title: </strong>
                  <a href={l.url}>{l.title} </a>
                </p>

                <p>Vendor: { l.vendor }</p>
                <p>Last Activity Date: { l.modified }</p>

                <span>{l.views} Views</span>
                <span className="score"><strong>Score:</strong> {l.score}</span>

                <button className="upvote" onClick={() => this.props.dispatchUpvote(l)}>Upvote</button>
                <button className="downvote"  onClick={() => this.props.dispatchDownvote(l)}>Downvote</button>

              </li>
            );
          })
        }
        </ul>
      </div>
    );
  }
}

export { Links };

// Container //
const mapState = (state) => ({
  stack: state.link.currentLinks.stackapp,
  git: state.link.currentLinks.github,
  error: state.link.currentLinks.error,
});

const mapDispatch = (dispatch) => ({
  dispatchUpvote: link => {
    console.log("dispatching vote***");
    const info = {
      error: link.error,
      vendor: link.vendor,
      vendor_id: link.vendor_id,
      vote: 'upvote',
      url: link.url,
      created: link.created,
      modified: link.modified
    }
    dispatch(updateVote(info));
  },
  dispatchDownvote: link => {
    const info = {
      error: link.error,
      vendor: link.vendor,
      vendor_id: link.vendor_id,
      vote: 'downvote',
      url: link.url,
      created: link.created,
      modified: link.modified
    }
    console.log("info***", info)
    dispatch(updateVote(info));
  }
});

export default connect(mapState, mapDispatch)(Links);
