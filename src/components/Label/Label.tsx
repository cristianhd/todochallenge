import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

const LabelForm = styled.Text`
    color: black;
    
  font-size: 18px;
  
`;

interface LabelProps extends TouchableOpacityProps{
        title: string
}
const Label = ({ title }:LabelProps)=> (

    <LabelForm style={{fontFamily: "Lexend-SemiBold",}}>{title}</LabelForm>
  
);
export default Label;