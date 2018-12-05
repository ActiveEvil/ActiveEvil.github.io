import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Component from './';
import Search from '../../containers/Search';
import Results from '../../containers/Results';

describe('Frame component', () => {
  test('renders an preleader when in loading state', () => {
    const wrapper = shallow(
      <Component
        isLoading={true}
      >
        <span>Foo</span>
      </Component>
    );

    expect(wrapper.find(`.loader`).exists()).toBe(true);
  });

  test('renders an application frame', () => {
    const wrapper = shallow(
      <Component />
    );

    expect(wrapper.find(`.frame`).exists()).toBe(true);
  });

  test('renders child elements', () => {
    const wrapper = shallow(
      <Component />
    );

    expect(wrapper.find(Search).exists()).toBe(true);
    expect(wrapper.find(Results).exists()).toBe(true);
  });
});
