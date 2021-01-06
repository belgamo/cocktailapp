import produce from 'immer';

import { ADD_FAVORITE, REMOVE_FAVORITE } from './types';

export const INITIAL_STATE = {
  favorites: [],
};

export default function favoritesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return produce(state, (draft) => {
        draft.favorites = [...state.favorites, action.drink];
      });
    case REMOVE_FAVORITE:
      return produce(state, (draft) => {
        const favorites = draft.favorites.filter(
          (drink) => drink.idDrink !== action.drinkId
        );
        draft.favorites = favorites;
      });
    default: {
      return state;
    }
  }
}
