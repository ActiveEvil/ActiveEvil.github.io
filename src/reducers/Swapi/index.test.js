import Reducer from './';
import {
  RECEIVE_CHARACTER_DATA,
} from '../../actions/Swapi';

describe('Swapi reducer', () => {
  test('returns the initial state', () => {
    const reducer = Reducer(undefined, {});

    expect(reducer).toEqual({
      characters: [],
    });
  });

  test('handles RECEIVE_CHARACTER_DATA action', () => {
    const characters = [{
      name: 'IG-88',
    }, {
      name: 'R2-D2',
    }];
    const reducer = Reducer({
      characters: [],
    }, {
      type: RECEIVE_CHARACTER_DATA,
      characters,
    });

    expect(reducer).toEqual({
      characters,
    });
  });
});
