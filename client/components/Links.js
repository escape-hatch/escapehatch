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
          results && results
          ? <h1>Search Results for "{ error }"</h1>
          : <h1>Retrieving search results ... </h1>
        }

        <ul>
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
                  );
            })
          }
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
