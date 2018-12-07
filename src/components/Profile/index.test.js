import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
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
          birth_year: '44BBY',
          eye_color: 'black',
          films: ['A New Hope'],
          gender: 'male',
          hair_color: 'n/a',
          height: '173',
          homeworld: 'Rodia',
          mass: '74',
          name: 'Greedo',
          skin_color: 'green',
          species: 'Rodian',
        }}
      />
    );

    expect(wrapper.find('.container').exists()).toBe(true);
  });

  test('renders as expected', () => {
    const component = renderer.create(
      <Component
        character={{
          birth_year: '44BBY',
          eye_color: 'black',
          films: ['A New Hope'],
          gender: 'male',
          hair_color: 'n/a',
          height: '173',
          homeworld: 'Rodia',
          mass: '74',
          name: 'Greedo',
          skin_color: 'green',
          species: 'Rodian',
        }}
      />
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
