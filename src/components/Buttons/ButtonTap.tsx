import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonText } from "./Styled";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}
const ButtonTab = ({ onPress, title }: ButtonProps) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText style={{ fontFamily: "Lexend-Regular" }}>{title}</ButtonText>
  </ButtonContainer>
);
export default ButtonTab;
