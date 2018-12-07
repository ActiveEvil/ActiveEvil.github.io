import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  RECEIVE_CHARACTER_DATA,
  SEARCH_CHARACTER_DATA,
  SET_PROFILE_DATA,
  fetchCharacterData,
  partialMatchCharacters,
  characterSelection,
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

  describe('partialMatchCharacters action', () => {
    const search = 'Droopy McCool';
    const action = partialMatchCharacters(search);

    test('sets a search term to perform a partial match against', () => {
      expect(action.type).toEqual(SEARCH_CHARACTER_DATA);
      expect(action.search).toEqual(search);
    });
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

  describe('characterSelection action', () => {
    test('returns SET_PROFILE_DATA action with updated profile content on ajax success', async () => {
      mockAxios.onGet('https://test.api/planet').reply(200, { name: 'Tatooine' });
      mockAxios.onGet('https://test.api/species').reply(200, { name: 'Rodian' });
      mockAxios.onGet('https://test.api/film').reply(200, { title: '' });

      const response = await store.dispatch(characterSelection({
        name: 'Greedo',
        homeworld: 'https://test.api/planet',
        species: 'https://test.api/species',
        films: ['https://test.api/film'],
      }));

      await response;

      const actions = store.getActions();

      expect(actions[0].type).toEqual(SET_PROFILE_DATA);
      expect(actions[0].profile).toEqual({
        name: 'Greedo',
        homeworld: 'Tatooine',
        species: 'Rodian',
        films: [''],
      });
    });

    test('throws on ajax error', async () => {
      mockAxios.onGet('https://test.api/planet').reply(500);

      try {
        await store.dispatch(characterSelection({
          name: 'Greedo',
          homeworld: 'https://test.api/planet',
          species: 'https://test.api/species',
          films: ['https://test.api/film'],
        }));
      } catch(err) {
        expect(err.message).toEqual('Request failed with status code 500');
      }
    });
  });
});
