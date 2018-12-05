import 'babel-polyfill';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  RECEIVE_CHARACTER_DATA,
  fetchCharacterData,
} from './';

const mockAxios = new MockAdapter(axios);
const mockStore = configureMockStore([thunk]);

function wait(ms){
   const start = new Date().getTime();
   let end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

describe('Swapi', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  describe('fetchCharacterData action', () => {
    test('returns RECEIVE_CHARACTER_DATA action with content on ajax success', async () => {
      mockAxios.onGet('https://test.api/?search=IG-88').reply(200, {
        count: 1,
        next: 'https://test.api/?search=R2-D2',
        previous: null,
        results: [{
          name: 'IG-88',
        }],
      });

      mockAxios.onGet('https://test.api/?search=R2-D2').reply(200, {
        count: 1,
        next: null,
        previous: null,
        results: [{
          name: 'R2-D2',
        }],
      });

      const response = await store.dispatch(fetchCharacterData('https://test.api/?search=IG-88'));

      await response;

      const actions = store.getActions();

      expect(actions[0].type).toEqual(RECEIVE_CHARACTER_DATA);
      expect(actions[0].characters).toEqual([{
        name: 'IG-88',
      }, {
        name: 'R2-D2',
      }]);
    });

    test('throws on ajax error', async () => {
      mockAxios.onGet('https://test.api/?search=R2-D2').reply(500);

      try {
        await store.dispatch(fetchCharacterData('https://test.api/?search=R2-D2'));
      } catch(err) {
        expect(err.message).toEqual('Request failed with status code 500');
      }
    });
  });
});
