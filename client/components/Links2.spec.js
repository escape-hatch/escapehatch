import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { LinksDummy } from './LinksDummy';

describe('LinksDummy Component - List Items', function () {
  let git;
  let stack;
  let user;
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

  function mockUser() {
    return {
      id: 1,
    }
  }

  beforeEach('render the component', () => {
    git = mockGit()
    stack = mockStack()
    user = mockUser()
    spy = sinon.spy();
    wrapper = shallow(<LinksDummy git={git} stack={stack} dispatchUpvote={spy} user={user}/>);
  });

  describe('Contents', () => {
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
  })

  describe('Voting Buttons - User Who Is Logged in', () => {
    it('calls dispatchUpvote when a logged-in user clicks to upvote git result', () => {
      wrapper = shallow(<LinksDummy git={git} user={user} dispatchUpvote={spy} />)
      wrapper.find('.upvote').simulate('click');
      expect(spy).to.have.property('callCount', 1);
    })

    it('calls dispatchDownvote when a logged-in user clicks to downvote git result', () => {
      wrapper = shallow(<LinksDummy git={git} user={user} dispatchDownvote={spy} />);
      wrapper.find('.downvote').simulate('click');
      expect(spy).to.have.property('callCount', 1);
    })

    it('calls dispatchUpvote when a logged-in user clicks to upvote stack overflow result', () => {
      wrapper = shallow(<LinksDummy stack={stack} user={user} dispatchUpvote={spy} />);
      wrapper.find('.upvote').simulate('click');
      expect(spy).to.have.property('callCount', 1);
    })

    it('calls dispatchDownvote when a logged-in user clicks to downvote stack overflow result', () => {
      wrapper = shallow(<LinksDummy stack={stack} user={user} dispatchDownvote={spy} />);
      wrapper.find('.downvote').simulate('click');
      expect(spy).to.have.property('callCount', 1);
    })
  })

  describe('Voting Buttons - User Who Is NOT Logged in', () => {
    beforeEach('user is not logged in, or user has not registered', () => {
      user = {}
    });

    it('upvote button should not render when a user is not logged-in', () => {
      wrapper = shallow(<LinksDummy git={git} stack={stack} user={user} />)
      expect(wrapper.text()).not.to.contain('Upvote');
    })

    it('downvote button should not render when a user is not logged-in', () => {
      wrapper = shallow(<LinksDummy git={git} stack={stack} user={user} />)
      expect(wrapper.text()).not.to.contain('Downvote');
    })
  })
});
