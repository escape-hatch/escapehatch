import React from 'react';
import { browserHistory } from 'react-router';
import base64url from 'base64-url';

module.exports = () =>
  (
    <div className="row">
      <div id="formDiv" className="col-lg-12">
        <form id="search" className="input-group" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            name="searchVal"
            placeholder="Search for..."
          />
          <span className="input-group-btn">
            <button className="btn btn-default searchButton" type="submit">Go!</button>
          </span>
        </form>
      </div>
    </div>
  );

function handleSubmit (e) {
    e.preventDefault();
    const val = e.target.searchVal.value;
    const userErr = base64url.encode(val);
    browserHistory.push(`/links/${userErr}`);
}
