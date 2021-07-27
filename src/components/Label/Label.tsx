import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { LabelForm } from "./Styled";

interface LabelProps extends TouchableOpacityProps{
        title: string
}
const Label = ({ title }:LabelProps)=> (

    <LabelForm style={{fontFamily: "Lexend-SemiBold",}}>{title}</LabelForm>
  
);
export default Label;