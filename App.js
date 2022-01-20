import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar placeholder="Search here..." />
        </View>
        <View style={styles.list}>
          <Text style={styles.text}>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  search: {
    padding: 16,
    backgroundColor: "green",
  },

  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },

  text: {
    color: "white",
  },
});
