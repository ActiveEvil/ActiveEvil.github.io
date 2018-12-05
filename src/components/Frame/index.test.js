import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Component from './';

Enzyme.configure({adapter: new Adapter()});

describe('Frame component', () => {
  test('renders an application frame', () => {
    const wrapper = shallow(
      <Component />
    );

    expect(wrapper.find(`.frame`).exists()).toBe(true);
  });

  test('renders child elements', () => {
    const wrapper = shallow(
      <Component>
        <span>Test</span>
      </Component>
    );

    expect(wrapper.find(`span`).exists()).toBe(true);
    expect(wrapper.find(`span`).text()).toEqual('Test');
  });
});
