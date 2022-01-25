import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeContainer = styled(SafeAreaView)`
  margin-top: ${StatusBar.currentHeight};
  flex: 1;
`;
const Search = styled(View)`
  padding: 16px;
`;
const List = styled(View)`
  flex: 1;
  padding: 16px;
`;

export const RestaurantsScreen = () => (
  <>
    <SafeContainer>
      <Search>
        <Searchbar placeholder="Search here..." />
      </Search>

      <List>
        <RestaurantInfoCard />
      </List>
    </SafeContainer>
  </>
);
