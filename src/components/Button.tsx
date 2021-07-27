import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
const ButtonContainer = styled.TouchableOpacity`
  justify-content: center;
  position: relative;
  width: 360;
  height: 55px;
  padding: 20px 0px;
  border-radius: 15px;
  background-color: #5dbc75
`;
const ButtonText = styled.Text`
    color: white;
    
  font-size: 18px;
  text-align: center;
`;

interface ButtonProps extends TouchableOpacityProps{
        title: string
}
const PressableButton = ({ onPress, title }:ButtonProps)=> (
  <ButtonContainer onPress={onPress} >
    <ButtonText style={{fontFamily: "Lexend-Regular",}}>{title}</ButtonText>
  </ButtonContainer>
);
export default PressableButton;