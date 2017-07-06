import React from 'react';
import './scss/Home.scss';

module.exports = () =>
  (
    <div>
      <div className="row content">
        <div className="col-lg-3" />
        <div className="col-lg-6">
          <h2 className="headerMain">Get the help you need, right when you need it</h2>
          <h4 className="headerHome">Escape Hatch instantly connects developers with relevant information to help cut down on time spent debugging.</h4>
        </div>
        <div className="col-lg-3" />
      </div>
      <hr />

      <div className="row content">
        <div className="col-lg-3" />
        <div className="col-lg-6">
          <h2 className="headerHome">Getting Started</h2>
          <span><code className="codebox">npm install escape-hatch</code></span>

          <h4 className="headerHome">This gives you access to both the client side, and server side files that you can plug into your code and start getting solutions to your problems</h4>
          <hr />

          <div className="example">
            <h4 className="headerHome">For monitoring errors on your server side, simply add the follow line to the top of your server start file:</h4>
            <span><code className="codebox">require('escape-hatch')()</code></span>
            <h4 className="exHeader">You'll see links in your terminal like this upon errors in Node:</h4>
            <img src="/assets/backend-ss.png" className="img-responsive backend-ss" />
          </div>
          <hr />

          <div className="example">
            <h4 className="headerHome">For monitoring in the browser, use this simple script tag in your html files:</h4>
            <span><code className="codebox">&lt;script src='node_modules/escape-hatch/escape-hatch-browser.js'&gt;&lt;/script&gt;</code></span>
            <h4 className="exHeader">You'll see links in your browser console upon front-end errors:</h4>
            <img src="/assets/frontend-ss.png" className="img-responsive frontend-ss" />
          </div>

        </div>
        <div className="col-lg-3" />
      </div>
    </div>
  );
