import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
  let search;

  before(() => {
    search = shallow(<SearchBar />);
  });

  it('shows a search bar', () =>
    expect(search.find('input[name="searchVal"]')).to.have.length(1)
  );

  it('has a submit button', () =>
    expect(search.find('button[type="submit"]')).to.have.length(1)
  );

  describe('when submitted', () => {
    search = spy();
    const submitEvent = {
      preventDefault: spy(),
      target: {
        searchVal: {
          value: 'sequelize userID column does not exist'
        },
        userID: 1
      }
    };

    beforeEach('submit', () => {
      submitEvent.preventDefault.reset();
      search.find('button[type="submit"]').simulate('submit', submitEvent);
    });

    it('calls onSubmit', () => {
      const onSubmit = search.find('form').onSubmit;
      expect(onSubmit).to.have.been.called;
    });

    it('calls preventDefault', () =>
      expect(submitEvent.preventDefault).to.have.been.called
    );
  });
});
