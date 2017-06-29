import { getLinksByErrId } from './link';
import axios from 'axios';
import sinon from 'sinon';
import { expect } from 'chai';

describe('axios call to back end to retrieve search results from APIs', () => {
  beforeEach(() => {
    sinon.stub(axios, 'get');
  });

  afterEach(() => {
    axios.get.restore();
  });

  xit('should make an axios call', () => {
    getLinksByErrId('VHlwZUVycm9yOiBBc3NpZ25tZW50IHRvIGNvbnN0YW50IHZhcmlhYmxlLg')

    expect(axios.get.callCount).to.equal(1)
  });
});
