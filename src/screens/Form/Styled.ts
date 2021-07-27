import styled from "styled-components/native";

export const Container = styled.View`
    position: relative;
    
    height: auto;
    background-color: white;
    
`;

export const TimePickerContainer = styled.View`
  
  position:relative;
  display: flex;
  flex-direction: column;

  

`;

export const Input = styled.TextInput`
    padding: 20px 0px;
  border-radius: 15px;
  background-color: #E8E8E8;
  font-size: 18px;
  
`;

export const WrapperTime = styled.View`
   
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

export const WrapperField = styled.View`
    padding: 20px 0px;
  border-radius: 15px;
  background-color: #E8E8E8;
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
    padding:20px;
   
    

`;