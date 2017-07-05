import React from 'react';

module.exports = () =>
  (
    <div>
      <div className="row content">
        <div className="col-lg-3" />
        <div className="col-lg-6">
          <h2 className="headerHome">Get the help you need, right when you need it</h2>
          <h4 className="headerHome">Escape Hatch instantly connects developers with relevant information to help cut down on time spent debugging.</h4>
        </div>
        <div className="col-lg-3" />
      </div>

      <div className="row content">
        <div className="col-lg-3" />
        <div className="col-lg-6">
          <h2 className="headerHome">Getting Started</h2>
          <span className="codebox"><code>npm install escape-hatch</code></span>

          <h4 className="headerHome">This gives you access to both the client side, and server side files that you can plug into your code and start getting solutions to your problems</h4>

          <div className="example">
            <h4 className="headerHome">For monitoring errors on your server side, simply add the follow line to the top of your server start file:</h4>
            <span className="codebox"><code>require('escape-hatch-node')()</code></span>
          </div>

          <div className="example">
            <h4 className="headerHome">For monitoring in the browser, use this simple script tag in your html files:</h4>
            <span className="codebox"><code>&lt;script src='node_modules/escape-hatch/escape-hatch-browser.js'&gt;&lt;/script&gt;</code></span>
          </div>

        </div>
        <div className="col-lg-3" />
      </div>
    </div>
  );
