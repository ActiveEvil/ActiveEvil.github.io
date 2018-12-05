import axios from 'axios';

export const RECEIVE_CHARACTER_DATA = 'RECEIVE_CHARACTER_DATA';

function receiveCharacterData(characters) {
  return {
    type: RECEIVE_CHARACTER_DATA,
    characters,
    receivedAt: Date.now(),
  };
}

async function loadCharacterData(url) {
  const characters = [];
  const response = await axios.get(url);
  const { next, results } = response.data;

  characters.push(...results);

  if (next) {
    const moreCharacters = await loadCharacterData(next)

    characters.push(...moreCharacters);
  }

  return characters;
}

export function fetchCharacterData(url) {
  return async function fetchThunk(dispatch) {
    const characters = await loadCharacterData(url);

    dispatch(receiveCharacterData(characters));
  };
}
