import {
  RECEIVE_CHARACTER_DATA,
  SEARCH_CHARACTER_DATA,
  SET_PROFILE_DATA,
} from '../../actions/Swapi';

const Swapi = (state = {
  isFetching: true,
  characters: [],
  search: '',
  characterMatches: [],
  profile: null,
}, action) => {
  switch (action.type) {
    case RECEIVE_CHARACTER_DATA: {
      return Object.assign({}, state, {
        isFetching: false,
        characters: action.characters,
      });
    }
    case SEARCH_CHARACTER_DATA: {
      let characterMatches = [];

      if (action.search.length) {
        characterMatches = state.characters.filter(character => character.name.toLowerCase().includes(action.search.toLowerCase()));
      }

      return Object.assign({}, state, {
        search: action.search,
        characterMatches,
      });
    }
    case SET_PROFILE_DATA: {
      return Object.assign({}, state, {
        profile: action.profile,
      });
    }
    default:
      return state;
  }
};

export default Swapi;
