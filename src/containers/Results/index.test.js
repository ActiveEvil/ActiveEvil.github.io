import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import Container from './';
import Component from '../../components/Results';
import { characterSelection } from '../../actions/Swapi';

jest.mock('../../actions/Swapi');
characterSelection.mockImplementation();

const mockStore = configureMockStore([thunk]);

describe('Results container', () => {
  const store = mockStore({
    Swapi: {
      characterMatches: [{
        name: 'IG-88',
      }, {
        name: 'R2-D2',
      }],
    },
  });

  test('renders in DOM', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Container />
      </Provider>
    );

    expect(wrapper.find(Container).exists()).toBe(true);
    expect(wrapper.find(Component).exists()).toBe(true);
  });

  test('defines properties for component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Container />
      </Provider>
    );

    const props = wrapper.find(Component).props();

    expect(props.characters).toEqual(expect.arrayContaining([]));
    expect(props.uiEventHandlers.handleCharacterSelection).toBe.function;
  });

  // test('dispatches characterSelection action from handleCharacterSelection', () => {
  //   const wrapper = mount(
  //     <Provider store={store}>
  //       <Container />
  //     </Provider>
  //   );
  //
  //   const link = wrapper.find('.link').at(0);
  //
  //   link.simulate('click', link);
  //
  //   expect(store.dispatch).toHaveBeenCalledWith(characterSelection({
  //     name: 'IG-88',
  //   }));
  // });
});
