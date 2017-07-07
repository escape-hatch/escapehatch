import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { updateVote } from '../reducer/link';

const VoteButtons = (props) =>
  (
    <div>
      {
        props.loggedIn
          ? <div className="end">
              <div className="row">
                <div className="col-md-6">Was this result helpful for you?
                  <button className="upvote btn-success"  onClick={() => props.dispatchUpvote(props.item)}><i className="fa fa-thumbs-up" aria-hidden="true"></i></button>
                  <button className="downvote btn-success"  onClick={() => props.dispatchDownvote(props.item)}><i className="fa fa-thumbs-down" aria-hidden="true"></i></button>
                </div>
              </div>
            </div>
          : <div>
              <h4>
                <Link className="loginSignupButtonSR" to='/login'><strong>Log in </strong></Link>or
                <Link className="loginSignupButtonSR" to='/signup'><strong> sign up </strong></Link> to vote!
              </h4>
            </div>
      }
    </div>
  );


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

export default connect(null, mapDispatch)(VoteButtons);
