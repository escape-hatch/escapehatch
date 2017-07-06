import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
  scryRenderedDOMComponentsWithClass,
  scryRenderedComponentsWithType
} from 'react-addons-test-utils';
import { expect } from 'chai';

import { LinksDummy } from './LinksDummy';

describe('Links Component - Tags', () => {
  let component;
  let git;
  let stack;
  let user;

  beforeEach('render the component', () => {
    stack = [
      {
        vendor_id: 1,
        title: 'i\'m just a link',
        modified: 'Sun Feb 22 2015',
        views: 47,
        tags: ['school', 'house', 'rock!'],
      }
    ];

    git = [
      {
        vendor_id: 1212345789101112,
        title: `yes, i'm only a link`,
        modified: '2012-12-10T02:48:26Z',
        status: 'open',
        comments: 52,
      },
      {
        vendor_id: 172123914,
        title: `and i'm sittin' here on capitol hill`,
        modified: '2017-06-22T18:54:57Z',
        status: 'closed',
        comments: 2,
      }
    ];

    user = {
      id: 1,
    }

    component = ReactTestUtils.renderIntoDocument(<LinksDummy
      git={git}
      stack={stack}
      user={user}
    />);
  });

  it('should render a div with "links" class', () => {
    const linksElem = findRenderedDOMComponentWithClass(component, 'links');

    expect(linksElem).to.be.ok;
  });

  it('should render a list item for each git result', () => {
    const linksElem = scryRenderedDOMComponentsWithClass(component, 'gitResults');

    expect(linksElem.length).to.equal(2);
  });

  it('should render a list item for each stack result', () => {
    const linksElem = scryRenderedDOMComponentsWithClass(component, 'stackResults');

    expect(linksElem.length).to.equal(1);
  });
});
