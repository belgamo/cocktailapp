import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import {
  ActivityIndicator,
  IconButton,
  Title,
  Caption,
  Headline,
  Text,
  Snackbar,
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
  const [showSnackbar, setShowSnackbar] = useState(false);

  const onDismissSnackBar = () => setShowSnackbar(false);

  if (error)
    return <Error message="There was an error on fetch drink details!" />;

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

  const onFavorite = () => {
    dispatch(heartAction);
    setShowSnackbar(true);
  };

  return (
    <>
      <ScrollView>
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
            onPress={onFavorite}
          />
        </SubHeader>
        <TextContainer>
          <Title>Ingredients</Title>
          {Array(BACKEND_INGREDIENTS_QUANTITY)
            .fill(0)
            .map((item, index) =>
              drink[`strIngredient${index}`] ? (
                <Text key={`strIngredient${index}`}>
                  • {drink[`strIngredient${index}`]}
                </Text>
              ) : null
            )}
        </TextContainer>
        <TextContainer>
          <Title>Instructions</Title>
          <Text>{drink.strInstructions}</Text>
        </TextContainer>
      </ScrollView>

      <Snackbar
        visible={showSnackbar}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'X',
          onPress: onDismissSnackBar,
        }}
      >
        {!favorite ? 'Removed from favorites' : 'Added to favorites'}
      </Snackbar>
    </>
  );
};

export default DrinkDetails;
