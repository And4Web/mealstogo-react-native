import { disableExpoCliLogging } from "expo/build/logs/Logs";
import React from "react";
import { Text } from "react-native";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "65 Chicken",
    icon,
    photos = [
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.collinsdictionary.com%2Fdictionary%2Fenglish%2Frestaurant&psig=AOvVaw0wZIoZLa7J3mibcSQFofB_&ust=1642844084902000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCegbL6w_UCFQAAAAAdAAAAABAD",
    ],
    address = "purani dilli, sainik chawani",
    rating = 4.5,
    isOpenNow = true,
    isClosedTemporarily,
  } = restaurant;

  return <Text>{name}</Text>;
};
