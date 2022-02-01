import { disableExpoCliLogging } from "expo/build/logs/Logs";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

const Title = styled.Text`
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled(View)`
  padding: ${(props) => props.theme.space[2]};
`;
const Address = styled(Text)`
  padding: ${(props) => props.theme.space[0]};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.secondary};
`;

const ReastaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
`;
const Rating = styled(View)`
  flex-direction: row;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Jalebi Samosa",
    icon,
    photos = [
      "https://assets.cntraveller.in/photos/614071700adc3d1e95c7adbd/master/pass/outdoor-dining-pune-daily-all-day.jpg",
    ],
    address = "purani dilli, sainik chawani",
    rating = 4.7,
    isOpenNow = true,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  console.log(ratingArray);

  return (
    <ReastaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Rating>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
        </Rating>

        <Address>{address}</Address>
      </Info>
    </ReastaurantCard>
  );
};
