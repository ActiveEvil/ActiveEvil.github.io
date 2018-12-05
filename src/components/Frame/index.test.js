import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Component from './';

describe('Frame component', () => {
  test('renders an application frame', () => {
    const wrapper = shallow(
      <Component>
        <span>Foo</span>
      </Component>
    );

    expect(wrapper.find(`.frame`).exists()).toBe(true);
  });

  test('renders child elements', () => {
    const wrapper = shallow(
      <Component>
        <span>Bar</span>
      </Component>
    );

    expect(wrapper.find(`span`).exists()).toBe(true);
    expect(wrapper.find(`span`).text()).toEqual('Bar');
  });
});
