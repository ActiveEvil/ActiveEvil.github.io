import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import Component from './';

describe('Results component', () => {
  test('does not render when there are no character matches', () => {
    const wrapper = shallow(
      <Component
        characters={[]}
      />
    );

    expect(wrapper.find('.container').exists()).toBe(false);
  });

  test('renders a results list when there are character matches', () => {
    const wrapper = shallow(
      <Component
        characters={[{
          name: 'IG-88',
        }, {
          name: 'R2-D2',
        }]}
      />
    );

    expect(wrapper.find('.list').exists()).toBe(true);
    expect(wrapper.find('li').length).toEqual(2);
  });

  test('renders as expected', () => {
    const component = renderer.create(
      <Component
        characters={[{
          name: 'IG-88',
        }, {
          name: 'R2-D2',
        }]}
      />
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
