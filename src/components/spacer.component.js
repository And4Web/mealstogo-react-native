import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const TopSmall = styled(View)`
  margin-top: 4px;
`;
const TopMedium = styled(View)`
  margin-top: 8px;
`;
const TopLarge = styled(View)`
  margin-top: 16px;
`;
const LeftSmall = styled(View)`
  margin-left: ${(props) => props.theme.space[1]};
`;
const LeftMedium = styled(View)`
  margin-left: ${(props) => props.theme.space[2]};
`;
const LeftLarge = styled(View)`
  margin-left: ${(props) => props.theme.space[3]};
`;

export const Spacer = ({ variant }) => {
  if (variant == "topSmall") {
    return <TopSmall />;
  }
  if (variant == "topMedium") {
    return <TopMedium />;
  }
  if (variant == "topLarge") {
    return <TopLarge />;
  }
  if (variant == "leftSmall") {
    return <LeftSmall />;
  }
  if (variant == "leftMedium") {
    return <LeftMedium />;
  }
  if (variant == "leftLarge") {
    return <LeftLarge />;
  }
};
