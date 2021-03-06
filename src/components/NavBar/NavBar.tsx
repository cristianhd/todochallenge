import React from "react";
import { Text } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CHANGE_TAB } from "../../actions";
import {
  Container,
  Icons,
  StyleText,
  TabItem,
  Wrapper,
  WrapperNav,
} from "./Styled";

const NavBar = () => {
  const [tab, setTab] = useState<number>(0);

  const dispatch = useDispatch();

  const onChange = (tab: number) => {
    setTab(tab);
    dispatch({ type: CHANGE_TAB, payload: tab });
  };

  return (
    <Container>
      <WrapperNav>
        <Text style={{ fontFamily: "Lexend-SemiBold", fontSize: 22 }}>
          Board
        </Text>
        <Icons>
          <Ionicons name="search" size={20} color="gray" />
          <FontAwesome5 name="bell" size={20} color="gray" />
          <Ionicons name="menu" size={20} color="gray" />
        </Icons>
      </WrapperNav>
      <Wrapper>
        <TabItem active={tab === 0} onPress={() => onChange(0)}>
          <StyleText
            active={tab === 0}
            style={{ fontFamily: "Lexend-Regular", fontSize: 16 }}
          >
            All
          </StyleText>
        </TabItem>
        <TabItem active={tab === 1} onPress={() => onChange(1)}>
          <StyleText
            active={tab === 1}
            style={{ fontFamily: "Lexend-Regular", fontSize: 16 }}
          >
            Completed
          </StyleText>
        </TabItem>
        <TabItem active={tab === 2} onPress={() => onChange(2)}>
          <StyleText
            active={tab === 2}
            style={{ fontFamily: "Lexend-Regular", fontSize: 16 }}
          >
            Uncompleted
          </StyleText>
        </TabItem>
        <TabItem active={tab === 3} onPress={() => onChange(3)}>
          <StyleText
            active={tab === 3}
            style={{ fontFamily: "Lexend-Regular", fontSize: 16 }}
          >
            Favorite
          </StyleText>
        </TabItem>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
