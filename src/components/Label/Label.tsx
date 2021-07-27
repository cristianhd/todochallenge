import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

const ButtonText = styled.Text`
    color: black;
    
  font-size: 18px;
  
`;

interface LabelProps extends TouchableOpacityProps{
        title: string
}
const Label = ({ title }:LabelProps)=> (

    <ButtonText style={{fontFamily: "Lexend-SemiBold",}}>{title}</ButtonText>
  
);
export default Label;