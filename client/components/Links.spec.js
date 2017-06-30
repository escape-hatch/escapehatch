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

import { Links } from './Links';

describe('Links Component - Tags', () => {
  let component;
  let git;
  let stack;

  beforeEach('render the component', () => {
    git = ['i\'m just a link', 'yes i\'m only a link'];
    stack = ['and i\'m sitting here on capitol hill'];

    component = ReactTestUtils.renderIntoDocument(<Links
      git={git}
      stack={stack}
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
