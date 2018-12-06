import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Component from './';

describe('Profile component', () => {

  test('does not render when there is no active character profile', () => {
    const wrapper = shallow(
      <Component />
    );

    expect(wrapper.find('.container').exists()).toBe(false);
  });

  test('renders a character profile', () => {
    const wrapper = shallow(
      <Component
        character={{
          name: 'IG-88',
        }}
      />
    );

    expect(wrapper.find('.container').exists()).toBe(true);
    expect(wrapper.find('.title').text()).toEqual('IG-88');

  });
});
