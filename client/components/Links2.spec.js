import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { Links } from './Links';

describe('Links Component - List Items', function () {
  let git;
  let stack;
  let wrapper;
  let spy;

  function mockGit() {
    return [
      {
        vendor_id: 172123914,
        title: `and i'm sittin' here on capitol hill`,
        modified: '2017-06-22T18:54:57Z',
        status: 'closed',
        comments: 2,
      }
    ]
  }

  function mockStack() {
    return [
      {
        vendor_id: 1,
        title: 'i\'m just a link',
        modified: 'Sun Feb 22 2015',
        views: 47,
      }
    ]
  }

  beforeEach('render the component', () => {
    git = mockGit()
    stack = mockStack()
    spy = sinon.spy();
    wrapper = shallow(<Links git={git} stack={stack} dispatchUpvote={spy} />);
  });

  it('renders the title of each git and stack search result', () => {
    expect(wrapper.text()).to.contain(`i\'m just a link`);
    expect(wrapper.text()).to.contain(`and i\'m sittin\' here on capitol hill`);
  });

  it('renders the last activity date of each git and stack search result', () => {
    expect(wrapper.text()).to.contain('2017-06-22T18:54:57Z');
    expect(wrapper.text()).to.contain('Sun Feb 22 2015');
  });

  it('renders the status of each git search result', () => {
    expect(wrapper.text()).to.contain('closed');
  });

  it('renders the number of comments for each git search result', () => {
    expect(wrapper.text()).to.contain('2');
  });

  it('renders the number of views for each stack search result', () => {
    expect(wrapper.text()).to.contain('47');
  });

  it('calls dispatchUpvote handler when clicked on git result', () => {
    wrapper = shallow(<Links git={git} dispatchUpvote={spy} />);
    wrapper.find('.upvote').simulate('click');
    expect(spy).to.have.property('callCount', 1);
  })

  it('calls dispatchDownvote handler when clicked on git result', () => {
    wrapper = shallow(<Links git={git} dispatchDownvote={spy} />);
    wrapper.find('.downvote').simulate('click');
    expect(spy).to.have.property('callCount', 1);
  })

  it('calls dispatchUpvote handler when clicked on Stack Overflow result', () => {
    wrapper = shallow(<Links stack={stack} dispatchUpvote={spy} />);
    wrapper.find('.upvote').simulate('click');
    expect(spy).to.have.property('callCount', 1);
  })

  it('calls dispatchDownvote handler when clicked on Stack Overflow result', () => {
    wrapper = shallow(<Links stack={stack} dispatchDownvote={spy} />);
    wrapper.find('.downvote').simulate('click');
    expect(spy).to.have.property('callCount', 1);
  })
});
