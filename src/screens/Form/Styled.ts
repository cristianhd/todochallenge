import styled from "styled-components/native";

export const Container = styled.View`
  position: absolute;
  width: 100%;
  
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
`;

export const TimePickerContainer = styled.View`
  position: relative;
  width: 46%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.TextInput`
 
  border-radius: 15px;
  background-color: #e8e8e8;
  font-size: 15px;
  height: auto;
`;

export const WrapperTime = styled.View`
position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyleText = styled.Text`
  justify-content: center;
  color: #808b96;
  font-size: 15px;
  
`;
export const WrapperPicker = styled.View`
padding: 10px;
  border-radius: 15px;
  background-color: #e8e8e8;
  width: 100%;
  height: 45px;
`;
export const WrapperField = styled.View`
  padding: 10px;
  border-radius: 15px;
  background-color: #e8e8e8;
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const WrapperForm = styled.View`
  position: relative;
  width: 100%;

  padding: 20px;
  display: flex;
  flex-direction: column;

  justify-content: space-around;
`;

export const WrapperButton = styled.View`
  position: relative;
  padding-top: 20px;
  align-items: center;
  
`;
