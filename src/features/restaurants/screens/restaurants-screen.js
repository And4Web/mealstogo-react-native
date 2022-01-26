import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeContainer = styled(SafeAreaView)`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  flex: 1;
`;
const Search = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const List = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
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
