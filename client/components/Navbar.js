import React from 'react';
import { Link } from 'react-router';

module.exports = ({ loggedIn, handleClick }) =>
  (
    <div className="panel panel-default">
      <div className="panel-heading nav navbar-default">
        <div className="navBar row">
          <div className="col-xs-4">
            <h2 className="panel-title tab"><a href="#" className=""><img src="/img/hatch.png" className="hatch" />Escape Hatch</a></h2>
          </div>
          <div className="col-xs-3" />
            <div className="col-xs-5">
                <ul className="nav navbar-nav navbar-right">
                  <li className="tab"><Link to="/">Home</Link></li>
                    { loggedIn ?
                      <li className="loginSignup">
                        <span>Welcome!</span>
                        <Link to="/user" className="logout tab">My Links</Link>
                        <Link to="/" onClick={() => handleClick() } className="logout tab">Logout</Link>
                      </li> :
                      <li className="loginSignup">
                        <span><Link to="/login">Login</Link></span>
                        <span><Link to="/signup">Sign Up</Link></span>
                      </li>
                    }
                  <hr />
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
