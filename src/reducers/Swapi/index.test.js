import Reducer from './';
import {
  RECEIVE_CHARACTER_DATA,
  SEARCH_CHARACTER_DATA,
  SET_PROFILE_DATA,
} from '../../actions/Swapi';

describe('Swapi reducer', () => {
  test('returns the initial state', () => {
    const reducer = Reducer(undefined, {});

    expect(reducer).toEqual({
      isFetching: true,
      characters: [],
      search: '',
      characterMatches: [],
      profile: null,
    });
  });

  test('handles RECEIVE_CHARACTER_DATA action', () => {
    const reducer = Reducer({
      isFetching: true,
      characters: [],
      search: '',
      characterMatches: [],
      profile: null,
    }, {
      type: RECEIVE_CHARACTER_DATA,
      characters: [{
        name: 'IG-88',
      }, {
        name: 'R2-D2',
      }],
    });

    expect(reducer).toEqual({
      isFetching: false,
      characters: [{
        name: 'IG-88',
      }, {
        name: 'R2-D2',
      }],
      search: '',
      characterMatches: [],
      profile: null,
    });
  });

  test('handles SEARCH_CHARACTER_DATA action with query', () => {
    const reducer = Reducer({
      isFetching: false,
      characters: [{
        name: 'IG-88',
      }, {
        name: 'R2-D2',
      }],
      search: '',
      characterMatches: [],
      profile: null,
    }, {
      type: SEARCH_CHARACTER_DATA,
      search: 'r',
    });

    expect(reducer).toEqual({
      isFetching: false,
      characters: [{
        name: 'IG-88',
      }, {
        name: 'R2-D2',
      }],
      search: 'r',
      characterMatches: [{
        name: 'R2-D2',
      }],
      profile: null,
    });
  });

  test('handles SEARCH_CHARACTER_DATA action with no query', () => {
    const reducer = Reducer({
      isFetching: false,
      characters: [{
        name: 'IG-88',
      }, {
        name: 'R2-D2',
      }],
      search: 'r',
      characterMatches: [{
        name: 'R2-D2',
      }],
      profile: null,
    }, {
      type: SEARCH_CHARACTER_DATA,
      search: '',
    });

    expect(reducer).toEqual({
      isFetching: false,
      characters: [{
        name: 'IG-88',
      }, {
        name: 'R2-D2',
      }],
      search: '',
      characterMatches: [],
      profile: null,
    });
  });

  test('handles SET_PROFILE_DATA action', () => {
    const reducer = Reducer({
      isFetching: false,
      characters: [],
      search: '',
      characterMatches: [],
      profile: null,
    }, {
      type: SET_PROFILE_DATA,
      profile: {
        name: 'IG-88',
      },
    });

    expect(reducer).toEqual({
      isFetching: false,
      characters: [],
      search: '',
      characterMatches: [],
      profile: {
        name: 'IG-88',
      },
    });
  });
});
