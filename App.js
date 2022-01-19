import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.search}>
          <Text>Search</Text>
        </View>
        <View style={styles.list}>
          <Text style={{color: 'white'}}>List</Text>
        </View>
      </SafeAreaView>
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
