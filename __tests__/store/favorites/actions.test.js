import {
  addFavorite,
  removeFavorite,
} from '../../../src/store/modules/favorites/actions';

describe('Favorite actions', () => {
  it('addFavorite', () => {
    const drink = {
      id: 1,
      name: 'Cocktail',
      image: 'cocktail.png',
    };

    expect(addFavorite({ drink })).toStrictEqual({
      type: '@favorites/ADD_FAVORITE',
      drink,
    });
  });

  it('removeFavorite', () => {
    const drinkId = 1;

    expect(removeFavorite({ drinkId })).toStrictEqual({
      type: '@favorites/REMOVE_FAVORITE',
      drinkId,
    });
  });
});
