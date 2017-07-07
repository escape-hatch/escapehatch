import React from 'react';
import VoteButtons from './voteButtons';

module.exports = (props) => {
  const { url, title, views, modified, comments, tags, user, body, createMarkup } = props
  return (
    <div className="center-block" style={{textAlign: 'left'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h2 className="result-title" style={{display: 'inline'}}>
                  <img src="/img/so-icon.png" className="vendorIcon" />
                  <a href={url}>{title} <span className="glyphicon glyphicon-log-in" /></a>
                </h2>
                <div className="" style={{float:'right', padddinRight: '30px'}}>Views: {views}</div>
              </div>

              <div className="panel-body">

                <div className="row ending">
                  <div className="col-md-6">Last Modified: {modified}</div>

                  <div className="col-md-6">
                      Score: {comments}
                  </div>

                  <div className="col-md-6">
                      Tags: {tags.join(', ')}
                  </div>
                </div>

                <div className="row ending">
                  <div className="col-md-12 body">
                    <div dangerouslySetInnerHTML={createMarkup(body)} />
                </div>
              </div>

                {
                  user.id
                    ? <VoteButtons loggedIn={ true } item= { props } />
                    : <VoteButtons loggedIn={ false } item= { props } />
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
