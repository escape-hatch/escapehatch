import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import {spy} from 'sinon';
import SearchBar from './SearchBar';

describe.only('SearchBar Component', () => {
  let search;

  before(() => {
    search = shallow(<SearchBar />);
    const form = search.find('form')
  });

  it('shows a search bar', () => {
    expect(search.find('form').find('input[name="searchVal"]')).to.have.length(1)
  })

  it('has a submit button', () => {
    const submit = search.find('form').find('button[type="submit"]')
    expect(submit).to.have.length(1)
  })

  // it('can set search terms', () => {
  //   search.find('form').simulate('submit',
  //     {
  //       preventDefault: () => undefined,
  //       target: {value: mockSearch}
  //     });
  //   expect(search.find('form').target.value.to.equal(mockSearch))
  // }
  // );

 describe('when submitted', () => {
    search = spy()
    const submitEvent = {
      preventDefault: spy(),
      target: {
        value: 'sequelize userID column does not exist'
      }
    }

    beforeEach('submit', () => {
      search.reset()
      submitEvent.preventDefault.reset()
      root.simulate('submit', submitEvent)
    })

    it('calls props.login with credentials', () => {
      expect(search).to.have.been.calledWith(
        submitEvent.target.value
      )
    })

    it('calls preventDefault', () => {
      expect(submitEvent.preventDefault).to.have.been.called
    })
  })
});
