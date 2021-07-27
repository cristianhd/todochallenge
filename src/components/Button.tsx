import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
const ButtonContainer = styled.TouchableOpacity`
  justify-content: center;
  position: absolute;
  width: 360px;
  height: 40px;
  padding: 20px 0px;
  border-radius: 10px;
  background-color: #5dbc75
`;
const ButtonText = styled.Text`

  font-size: 16px;
  text-align: center;
`;

interface ButtonProps extends TouchableOpacityProps{
        title: string
}
const PressableButton = ({ onPress, title }:ButtonProps)=> (
  <ButtonContainer onPress={onPress} >
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);
export default PressableButton;