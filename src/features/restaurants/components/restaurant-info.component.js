import { disableExpoCliLogging } from "expo/build/logs/Logs";
import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "65 Chicken Corner",
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
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 10,
    backgroundColor: "white",
  },
  title: {
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});
