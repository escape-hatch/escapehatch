import React from 'react';
import { connect } from 'react-redux';
import cssLinks from './scss/Links.scss';
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
    const results = this.props.results;
    const error = this.props.error;
    const user = this.props.user;

    return (
      <div className="links">
        {
          stack && git
          ? <h1>Search Results for "{ error }"</h1>
          : <h1>Retrieving search results ... </h1>
        }

        <ul>
<<<<<<< HEAD
          {
            results && results.map(res => {
              return res.vendor === 'github'
                ? (
                  <li key={ res.vendor_id } className="gitResults results">
                    <GitComponent
                      vendor={ res.vendor }
                      vendor_id={ res.vendor_id }
                      url={ res.url }
                      title={ res.title }
                      status={ res.status }
                      modified={ res.modified }
                      comments={ res.comments }
                      body={ res.body }
                      user={ user }
                      error={ error }
                      createMarkup={ this.createMarkup }
                    />
                  </li>
                  )
                : (
                  <li key={ res.vendor_id } className="stackResults results">
                    <StackComponent
                      vendor={ res.vendor }
                      vendor_id={ res.vendor_id }
                      url={ res.url }
                      title={ res.title }
                      views= { res.views }
                      modified={ res.modified }
                      comments={ res.comments }
                      body={ res.body }
                      tags={ res.tags }
                      user={ user }
                      error={ error }
                      createMarkup={ this.createMarkup }
                    />
                  </li>
                  )
            })
          }
=======
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

                            <div className="row ending">
                              <div className="col-md-12 body">
                                <div dangerouslySetInnerHTML={this.createMarkup(l.body)} />
                              </div>
                            </div>

                            {
                              user.id
                            ? <div className="end">
                                <div className="row">
                                  <div className="col-md-6">Was this result helpful for you?
                                    <button className="upvote btn-success"  onClick={() => this.props.dispatchUpvote(l)}><i className="fa fa-thumbs-up" aria-hidden="true"></i></button>
                                    <button className="downvote btn-success"  onClick={() => this.props.dispatchDownvote(l)}><i className="fa fa-thumbs-down" aria-hidden="true"></i></button>
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

                            <div className="row ending">
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
                            ? <div className="end">
                                <div className="row">
                                  <div className="col-md-6">Was this result helpful for you?
                                    <button className="upvote btn-success"  onClick={() => this.props.dispatchUpvote(l)}><i className="fa fa-thumbs-up" aria-hidden="true"></i></button>
                                    <button className="downvote btn-success"  onClick={() => this.props.dispatchDownvote(l)}><i className="fa fa-thumbs-down" aria-hidden="true"></i></button>
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
>>>>>>> master
        </ul>
    </div>
    );
  }
}

export { Links };

// Container //
const mapState = (state) => ({
  results: state.link.currentLinks.results,
  error: state.link.currentLinks.error,
  user: state.user,
});

export default connect(mapState)(Links);
