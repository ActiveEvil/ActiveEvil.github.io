import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Component from './';

Enzyme.configure({adapter: new Adapter()});

describe('Search component', () => {
  test('renders a search input', () => {
    const wrapper = shallow(
      <Component />
    );

    expect(wrapper.find(`.search`).exists()).toBe(true);
  });
});
