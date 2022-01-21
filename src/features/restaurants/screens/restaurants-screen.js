import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.component";

export const RestaurantsScreen = () => (
  <>
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar placeholder="Search here..." />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },

  search: {
    padding: 16,
  },

  list: {
    flex: 1,
    padding: 16,
  },

  text: {
    color: "black",
  },
});
