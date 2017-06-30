import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import { Links } from './Links';

describe('Links Component - List Items', function () {
  let git;
  let stack;
  let wrapper;

  function mockGit() {
    return [
      {
        vendor_id: 172123914,
        title: `and i'm sittin' here on capitol hill`,
        updated_on: '2017-06-22T18:54:57Z',
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
        updated_on: 'Sun Feb 22 2015',
        views: 47,
      },
      {
        vendor_id: 2,
        title: 'yes i\'m only a link',
        updated_on: 'Tues Feb 1 2013',
        views: 15,
      }
    ]
  }

  beforeEach('render the component', () => {
    git = mockGit()
    stack = mockStack()
    wrapper = shallow(<Links git={git} stack={stack} />);
  });

  it('renders the title of each git and stack search result', () => {
    expect(wrapper.text()).to.contain(`i\'m just a link`);
    expect(wrapper.text()).to.contain(`yes i\'m only a link`);
    expect(wrapper.text()).to.contain(`and i\'m sittin\' here on capitol hill`);
  });

  it('renders the last activity date of each git and stack search result', () => {
    expect(wrapper.text()).to.contain('2017-06-22T18:54:57Z');
    expect(wrapper.text()).to.contain('Sun Feb 22 2015');
    expect(wrapper.text()).to.contain('Tues Feb 1 2013');
  });

  it('renders the status of each git search result', () => {
    expect(wrapper.text()).to.contain('closed');
  });

  it('renders the number of comments for each git search result', () => {
    expect(wrapper.text()).to.contain('2');
  });

  it('renders the number of views for each stack search result', () => {
    expect(wrapper.text()).to.contain('47');
    expect(wrapper.text()).to.contain('15');
  });
});
