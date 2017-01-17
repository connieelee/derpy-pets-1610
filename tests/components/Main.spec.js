import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { buildState } from './helpers';
import * as constants from '../src/redux/constants';
import Main from '../../src/components/Main';

describe('Main Component', () => {
  let props;
  let wrapper;
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    props = buildState();
    props.customer.learnDotUrl = 'learn.fullstackacademy.com/testUrl';
    wrapper = shallow(<Enrolled {...props} />);
  });

  afterEach(() => sandbox.restore());

  describe('component rendering and function', () => {
    it('should display the enrolled tab', () => {
      expect(wrapper.find('#enrolled-tab')).to.have.lengthOf(1);
    });

    // This is being addressed in refactor branch (minor-refactor)
    it.skip('should call goToLearnDot on form submission', () => {
      const spy = sinon.spy(testFunc);
      wrapper = shallow(<Enrolled {...props} />);
      wrapper.find('form').simulate('submit', { preventDefault: () => null });
      expect(spy.calledOnce).to.equal(true);
    });
  });

  describe('component functions', () => {
    // This is being addressed in refactor branch (minor-refactor)
    it.skip('goToLearnDot must call window.location.assign with proper url', () => {
      const url = `${props.customer.learnDotUrl}/login?jwt=${props.customer.current.jwt}`;
      const event = { preventDefault: () => true };

      sinon.stub(window.location, 'assign');
      wrapper.instance().goToLearnDot(event);

      expect(window.location.assign).to.have.property('callCount', 1);
      expect(window.location.assign.calledWith(url)).to.be.true; // eslint-disable-line 
    });
  });
});