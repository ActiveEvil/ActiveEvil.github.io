import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import Container from './';
import Component from '../../components/Search';
import { partialMatchCharacters } from '../../actions/Swapi';

jest.mock('../../actions/Swapi');
partialMatchCharacters.mockImplementation();

const mockStore = configureMockStore([thunk]);

describe('Search container', () => {
  const store = mockStore({
    Swapi: {
      isFetching: false,
    },
  });

  store.dispatch = jest.fn();


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

    expect(props.isLoading).toEqual(false);
    expect(props.uiEventHandlers.handleSearchInput).toBe.function;
  });

  test('dispatches partialMatchCharacters action from handleSearchInput', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Container />
      </Provider>
    );

    const search = wrapper.find('.search');

    search.value = 'Lowbacca';
    search.simulate('change', search);

    expect(store.dispatch).toHaveBeenCalledWith(partialMatchCharacters('Lowbacca'));
  });
});
