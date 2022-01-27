import { disableExpoCliLogging } from "expo/build/logs/Logs";
import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: ${(props) => props.theme.space[2]};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};

  color: ${(props) => props.theme.colors.ui.primary};
`;
const ReastaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Jalebi Samosa",
    icon,
    photos = [
      "https://assets.cntraveller.in/photos/614071700adc3d1e95c7adbd/master/pass/outdoor-dining-pune-daily-all-day.jpg",
    ],
    address = "purani dilli, sainik chawani",
    rating = 4.5,
    isOpenNow = true,
    isClosedTemporarily,
  } = restaurant;

  return (
    <ReastaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </ReastaurantCard>
  );
};
