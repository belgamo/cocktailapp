import reducer, {
  INITIAL_STATE,
} from '../../../src/store/modules/favorites/reducer';
import * as FavoriteActions from '../../../src/store/modules/favorites/actions';

const drink = {
  idDrink: 1,
  name: 'Cocktail',
  image: 'cocktail.png',
};

describe('Favorite reducer', () => {
  it('@favorites/ADD_FAVORITE', () => {
    const state = reducer(
      INITIAL_STATE,
      FavoriteActions.addFavorite({ drink })
    );

    expect(state).toStrictEqual({
      favorites: [drink],
    });
  });

  it('@favorites/REMOVE_FAVORITE', () => {
    const state = reducer(
      { favorites: [drink] },
      FavoriteActions.removeFavorite({ drinkId: 1 })
    );

    expect(state).toStrictEqual({
      favorites: [],
    });
  });
});
