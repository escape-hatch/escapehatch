import React from 'react';
import './scss/Home.scss';

module.exports = () =>
  (
    <div>
      <div className="row content">
        <div className="col-lg-3" />
        <div className="col-lg-6">
          <div>
             <h2 className="headerHome update"><img src="/img/knight.png" className="logo"/></h2>
            <h2 className="headerMain">Get the help you need, right when you need it</h2>
            <h4>Escape Hatch instantly connects developers with relevant information to help cut down on time spent debugging.</h4>
            <hr />
          </div>

          <div className="containerHome">
            <h2 className="headerHome">Escape Hatch provides answers</h2>
            <div className="row vertical-overflow display-table-xs hang-right">
              <img src="img/broken-computer-design.jpg" className="col-xs-8 col-sm-6"/>
              <div className="col-xs-4 col-sm-6">
                <h2>Know when your code breaks</h2>
                <p>Find solutions to errors directly within your terminal.</p>
              </div>
            </div>

            <div className="row vertical-overflow display-table-xs  hang-left">
              <div className="col-xs-8 col-sm-6">
                <h2>Quickly identify and resolve issues</h2>
                <p>See results from Git and Stack Overflow to better understand what's breaking. The results are gathered using our specialized algorithm to only show the results most applicable to your error.</p>
              </div>
              <img src="img/files.svg" className="col-xs-4 col-sm-6"/>
            </div>

            <div className="row vertical-overflow display-table-xs hang-right">
              <img src="img/likeDislike.png" className="col-xs-4 col-sm-6"/>
              <div className="col-xs-8 col-sm-6">
                <h2>Upvote and Downvote Results for Speedier Error Resolution</h2>
                <p>Upvote or downvote useful results. Upvoted votes will be moved to the top of your search and saved in your account for future reference. Our algorithm will learn from your votes to show you catered results.</p>
              </div>
            </div>
          </div>

        <hr />
        <div className="containerHome">

            <h2 className="headerHome">Getting Started</h2>
            <h4 className="subheader">Escape Hatch is an npm library that helps you debug your code on the frontend and backend.</h4>
            <p className="subheader">
              To get started, paste the following code into your terminal. This gives you access to both client side and server side files that you can plug into your code to start getting solutions to your problems.
            </p>
            <span><code className="codebox">npm install escape-hatch</code></span>
            <br />
            <hr />

            <div className="example">
              <h4 className="subheader">For monitoring errors with your Node server, simply add the following line to the top of your server start file:</h4>
              <span><code className="codebox">require('escape-hatch')()</code></span>
              <h4 className="subheader">You'll see links in your terminal like this upon errors in Node. Click the link to see results on our website.</h4>
              <img src="/assets/backend-ss.png" className="img-responsive backend-ss" />
            </div>
            <hr />

            <div className="example">
              <h4 className="subheader">For monitoring in the browser, use this simple script tag in your html files:</h4>
              <span><code className="codebox">&lt;script src='node_modules/escape-hatch/escape-hatch-browser.js'&gt;&lt;/script&gt;</code></span>
              <h4 className="subheader">You'll see links in your browser console upon front-end errors:</h4>
              <img src="/assets/frontend-ss.png" className="img-responsive frontend-ss" />
            </div>
          </div>
      </div>

        </div>
    </div>
  );

            <p className="title">ESCAPE HATCH</p>
