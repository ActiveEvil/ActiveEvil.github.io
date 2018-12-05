import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import Container from './';
import Component from '../../components/Frame';

const mockStore = configureMockStore([thunk]);

describe('Frame container', () => {
  const store = mockStore({
    Swapi: {
      isFetching: false,
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

    expect(props.isLoading).toEqual(false);
  });
});
