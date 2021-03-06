import styled from "styled-components/native";

export const Container = styled.View`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Icons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100px;
`;
export const WrapperNav = styled.View`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: white;
`;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  padding: 0px 20px;
  justify-content: space-between;
  align-items: center;
  border: 1px;
  border-top-color: gray;
  border-bottom-color: gray;
  border-left-color: white;
  border-right-color: white;
`;

export const StyleText = styled.Text`
  justify-content: center;
  color: gray;
  font-size: 15px;
  ${({ active }: ITab) =>
    active &&
    `
    color:black;
  `}
`;
interface ITab {
  active: boolean;
}

export const TabItem = styled.TouchableOpacity`
  padding: 20px 0px;
  ${({ active }: ITab) =>
    active &&
    `
    border-bottom-width: 4px;
    border-style : solid;
    border-color : black;
  `}
`;
