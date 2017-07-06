import React from 'react';
import { connect } from 'react-redux';
import cssLinks from './scss/Links.scss';
import { updateVote } from '../reducer/link';
import { Link } from 'react-router';

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
    const error = this.props.error
    const user = this.props.user

    return (
      <div className="links">
        <h1>Search Results for "{ error }"</h1>
        <ul>
        {
          git && git.map(l => {
            return (
              <li key={ l.vendor_id } className="gitResults results">
                <div className="center-block" style={{textAlign: 'left'}}>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="panel panel-primary">
                          <div className="panel-heading">
                            <h2 className="panel-title" style={{display: 'inline'}}>
                              <img src="/img/github-icon.png" className="vendorIcon" />
                              <a href={l.url}>{l.title} <span className="glyphicon glyphicon-log-in"></span></a>
                            </h2>
                            <div className="" style={{float:'right', padddinRight: '30px'}}>Status: {l.status}</div>
                          </div>

                          <div className="panel-body">

                            <div className="row">
                              <div className="col-md-6">Last Modified: {l.modified}</div>

                              <div className="col-md-6">
                                 Score: {l.comments}
                              </div>
                            </div>

                            <div className="row">
                              <div className="body-heading"></div>
                            </div>

                            <div className="row">
                              <div className="col-md-12 body">
                                <div dangerouslySetInnerHTML={this.createMarkup(l.body)} />
                              </div>
                            </div>

                            {
                              user.id
                            ? <div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <button className="upvote btn-success"  onClick={() => this.props.dispatchUpvote(l)}><i className="fa fa-thumbs-up" aria-hidden="true"></i> Upvote</button>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-md-6">
                                    <button className="downvote btn-success"  onClick={() => this.props.dispatchDownvote(l)}><i className="fa fa-thumbs-down" aria-hidden="true"></i> Downvote</button>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </li>
            );
          })
        }

                {
          stack && stack.map(l => {
            return (
              <li key={ l.vendor_id } className="stackResults results">
                <div className="center-block" style={{textAlign: 'left'}}>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="panel panel-primary">
                          <div className="panel-heading">
                            <h2 className="panel-title" style={{display: 'inline'}}>
                              <img src="/img/so-icon.png" className="vendorIcon" />
                              <a href={l.url}>{l.title} <span className="glyphicon glyphicon-log-in"></span></a>
                            </h2>
                            <div className="" style={{float:'right', padddinRight: '30px'}}>Views: {l.views}</div>
                          </div>

                          <div className="panel-body">

                            <div className="row">
                              <div className="col-md-6">Last Modified: {l.modified}</div>

                              <div className="col-md-6">
                                 Score: {l.comments}
                              </div>

                              <div className="col-md-6">
                                 Tags: {l.tags.join(', ')}
                              </div>
                            </div>

                            {
                              user.id
                            ? <div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <button className="upvote btn-success"  onClick={() => this.props.dispatchUpvote(l)}><i className="fa fa-thumbs-up" aria-hidden="true"></i> Upvote</button>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-md-6">
                                    <button className="downvote btn-success"  onClick={() => this.props.dispatchDownvote(l)}><i className="fa fa-thumbs-down" aria-hidden="true"></i> Downvote</button>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
