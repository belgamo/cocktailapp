import { ADD_FAVORITE, REMOVE_FAVORITE } from './types';

export function addFavorite({ drink }) {
  return { type: ADD_FAVORITE, drink };
}

export function removeFavorite({ drinkId }) {
  return { type: REMOVE_FAVORITE, drinkId };
}
