import React from 'react';
import { browserHistory } from 'react-router';
import base64url from 'base64-url';

module.exports = () =>
  (
  <div id="footer">
        <div className="container">
        <p>© 2017 All Rights Reserved. Privacy and Legal.</p>
          <p className="muted credit">Made for developers <a href="https://github.com/escape-hatch/escapehatch"><i className="fa fa-code" aria-hidden="true"></i>
            </a>
          </p>
        </div>
  </div>
  );
