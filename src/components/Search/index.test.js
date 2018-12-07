import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import Component from './';

describe('Search component', () => {
  test('renders a search input', () => {
    const wrapper = shallow(
      <Component />
    );

    console.log(wrapper);

    expect(wrapper.find('.search').exists()).toBe(true);
  });

  test('renders as expected', () => {
    const component = renderer.create(
      <Component />
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
