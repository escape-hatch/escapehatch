import React from 'react';
import { connect } from 'react-redux';
import cssLinks from './scss/Links.scss';
import { updateVote } from '../reducer/link';
import GitComponent from './GitComponent';
import StackComponent from './StackComponent';

// Component //
class Links extends React.Component {
  constructor(props) {
    super(props);

  this.createMarkup = this.createMarkup.bind(this);
  }

  createMarkup(htmlMessage) {
    return {
      __html: htmlMessage
    };
  }

  render() {
    const stack = this.props.stack;
    const git = this.props.git;
    const error = this.props.error;
    const user = this.props.user;

    return (
      <div className="links">
        <h1>Search Results for "{ error }"</h1>
        <ul>
          {
            git && git.map(l => {
              return (
                <li key={ l.vendor_id } className="gitResults results">
                  <GitComponent
                    url={ l.url }
                    title={ l.title }
                    status={ l.status }
                    modified={ l.modified }
                    comments={ l.comments }
                    body={ l.body }
                    user={ user }
                    createMarkup={ this.createMarkup }
                  />
                </li>
              );
            })
          }
          {
            stack && stack.map(l => {
              return (
                <li key={ l.vendor_id } className="stackResults results">
                  <StackComponent
                    url={ l.url }
                    title={ l.title }
                    views= { l.views }
                    modified={ l.modified }
                    comments={ l.comments }
                    tags={ l.tags }
                    user={ user }
                  />
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
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  dispatchUpvote: link => {
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
    dispatch(updateVote(info));
  }
});

export default connect(mapState, mapDispatch)(Links);
