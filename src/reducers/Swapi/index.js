import {
  RECEIVE_CHARACTER_DATA,
} from '../../actions/Swapi';

const Swapi = (state = {
  isFetching: true,
  characters: [],
}, action) => {
  switch (action.type) {
    case RECEIVE_CHARACTER_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        characters: action.characters,
      });
    default:
      return state;
  }
};

export default Swapi;
