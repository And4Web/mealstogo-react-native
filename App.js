import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
        <View style={styles.search}>
          <Text>Search</Text>
        </View>
        <View style={styles.list}>
          <Text style={{color: 'white'}}>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto"/>
     
    </>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
  },

  search: {
    padding: 16,
    backgroundColor: 'green',
  },

  list: {    
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  }
});
