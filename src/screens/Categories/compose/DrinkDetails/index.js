import React from 'react';
import { View, ScrollView } from 'react-native';
import {
  ActivityIndicator,
  IconButton,
  Title,
  Caption,
  Headline,
  Text,
} from 'react-native-paper';
import useFetch from 'use-http';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import Error from '../../../../components/Error';
import Container from '../../../../components/Container';
import { Background, SubHeader, TextContainer } from './styles';
import {
  addFavorite,
  removeFavorite,
} from '../../../../store/modules/favorites/actions';

const BACKEND_INGREDIENTS_QUANTITY = 15;

const DrinkDetails = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorites);
  const route = useRoute();
  const { data = [], loading, error } = useFetch(
    `lookup.php?i=${route.params.id}`,
    {},
    []
  );

  if (error) return <Error message="Não foi possível exibir as categorias" />;

  if (loading)
    return (
      <Container>
        <ActivityIndicator animating />
      </Container>
    );

  const drink = data.drinks[0];
  const favorite = favorites.find(
    (drinks) => drinks.idDrink === route.params.id
  );
  const heartColor = favorite ? 'red' : 'gray';
  const heartAction = !favorite
    ? addFavorite({ drink })
    : removeFavorite({ drinkId: route.params.id });

  return (
    <>
      <Background source={{ uri: drink.strDrinkThumb }} />
      <SubHeader>
        <View>
          <Headline>{drink.strDrink}</Headline>
          {Boolean(drink.strTags) && <Caption>{drink.strTags}</Caption>}
        </View>
        <IconButton
          icon="heart"
          size={30}
          style={{
            marginLeft: 'auto',
          }}
          color={heartColor}
          onPress={() => dispatch(heartAction)}
        />
      </SubHeader>
      <ScrollView>
        <TextContainer>
          <Title>Ingredients</Title>
          {Array(BACKEND_INGREDIENTS_QUANTITY)
            .fill(0)
            .map((item, index) =>
              drink[`strIngredient${index}`] ? (
                <Text>• {drink[`strIngredient${index}`]}</Text>
              ) : null
            )}
        </TextContainer>
        <TextContainer>
          <Title>Instructions</Title>
          <Text>{drink.strInstructions}</Text>
        </TextContainer>
      </ScrollView>
    </>
  );
};

export default DrinkDetails;
