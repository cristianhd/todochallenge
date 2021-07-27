import styled from "styled-components/native";

export const Container = styled.View`
  position: absolute;
  width: 100%;

  background-color: white;
`;

export const TimePickerContainer = styled.View`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.TextInput`
  padding: 20px 0px;
  border-radius: 15px;
  background-color: #e8e8e8;
  font-size: 18px;
`;

export const WrapperTime = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const StyleText = styled.Text`
  padding-left: 20px;
  color: #808b96;
  font-size: 18px;
`;

export const WrapperField = styled.View`
  padding: 20px 0px;
  border-radius: 15px;
  background-color: #e8e8e8;
  width: auto;
`;

export const WrapperForm = styled.View`
  position: relative;
  width: auto;

  padding: 20px;
  display: flex;
  flex-direction: column;

  justify-content: center;
`;

export const WrapperButton = styled.View`
  position: relative;
  padding: 20px;
`;
