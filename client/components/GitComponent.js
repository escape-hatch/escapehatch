import React from 'react';
import { Link } from 'react-router';

module.exports = ({ url, title, status, modified, comments, body, user, createMarkup }) =>
  (

      <div className="center-block" style={{textAlign: 'left'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h2 className="panel-title" style={{display: 'inline'}}>
                    <img src="/img/github-icon.png" className="vendorIcon" />
                    <a href={url}>{title} <span className="glyphicon glyphicon-log-in" /></a>
                  </h2>
                  <div className="" style={{float:'right', padddinRight: '30px'}}>Status: {status}</div>
                </div>

                <div className="panel-body">

                  <div className="row">
                    <div className="col-md-6">Last Modified: {modified}</div>

                    <div className="col-md-6">
                        Score: {comments}
                    </div>
                  </div>

                  <div className="row">
                    <div className="body-heading"></div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 body">
                      <div dangerouslySetInnerHTML={createMarkup(body)} />
                    </div>
                  </div>

                  {
                    user.id
                  ? <div>
                      <div className="row">
                        <div className="col-md-6">
                          <button className="upvote btn-success"  onClick={() => this.props.dispatchUpvote(l)}>Upvote</button>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <button className="downvote btn-success"  onClick={() => this.props.dispatchDownvote(l)}>Downvote</button>
                        </div>
                      </div>
                    </div>
                  : <div>
                      <h4>
                        <Link className="loginSignupButton" to='/login'><strong>Log in </strong></Link>or
                        <Link className="loginSignupButton" to='/signup'><strong> sign up </strong></Link> to vote!
                      </h4>
                    </div>
                  }

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
