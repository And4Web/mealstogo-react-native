import { disableExpoCliLogging } from "expo/build/logs/Logs";
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer.component";

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
const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
const Rating = styled(View)`
  flex-direction: row;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Jalebi Samosa",
    icon = "https://cdn-icons-png.flaticon.com/512/48/48442.png",
    photos = [
      "https://assets.cntraveller.in/photos/614071700adc3d1e95c7adbd/master/pass/outdoor-dining-pune-daily-all-day.jpg",
    ],
    address = "purani dilli, sainik chawani",
    rating = 4.7,
    isOpenNow = true,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  // console.log(ratingArray);

  return (
    <ReastaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <View style={{ flexDirection: "row" }}>
          <Title>{name}</Title>
          <Spacer variant="leftSmall" />
          <View style={{ paddingLeft: 5, marginTop: 8 }}>
            <Image style={{ width: 20, height: 20 }} source={{ uri: icon }} />
          </View>
        </View>

        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>

          <SectionEnd>
            {isClosedTemporarily && (
              <Text
                style={{
                  color: "red",

                  fontSize: 16,
                }}
                variant="label"
              >
                Closed Temporarily
              </Text>
            )}
            <Spacer variant="leftSmall" />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          </SectionEnd>
        </Section>

        <Address>{address}</Address>
      </Info>
    </ReastaurantCard>
  );
};
