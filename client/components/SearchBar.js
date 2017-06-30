import React from 'react';

module.exports = (props) =>
  (
    <div className="row">
      <div className="col-lg-6">
        <form
          className="input-group"
          onSubmit={ (e) => {
            e.preventDefault();
            props.handleSubmit(e.target.searchVal.value);
          }}
        >
          <input
            type="text"
            className="form-control"
            name="searchVal"
            placeholder="Search for..."
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Go!</button>
          </span>
        </form>
      </div>
    </div>
  );
