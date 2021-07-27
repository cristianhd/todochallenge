import React, { Fragment, useEffect } from "react";
import { Button, Pressable, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { Container, Icons, Wrapper, WrapperNav } from "./Styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Tab, TabView } from "react-native-elements";

const NavBar = () => {
  const [tab, setTab] = useState<number>(0);

  const dispatch = useDispatch();

  const onChange = (tab: number) => {
    setTab(tab);
    dispatch({ type: "CHANGE_TAB", payload: tab });
  };
  console.log("nav", tab);

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

      <Tab value={tab} 
        onChange={onChange} 
        indicatorStyle={{opacity:100,backgroundColor:"white" , borderBottomColor: "black",borderBottomWidth:5,}}
        
       
        
        >

        
        <Tab.Item style={{backgroundColor:"white"}} titleStyle={{fontFamily: "Lexend-Regular", fontSize: 10,color:"gray",textTransform:"capitalize"}}  title="All"/>
        <Tab.Item style={{backgroundColor:"white"}} titleStyle={{fontFamily: "Lexend-Regular", fontSize: 10,color:"gray",textTransform:"capitalize"}} title="Comp" />
        <Tab.Item style={{backgroundColor:"white"}} titleStyle={{fontFamily: "Lexend-Regular", fontSize: 10,color:"gray",textTransform:"capitalize"}} title="Uncom" />
        <Tab.Item style={{backgroundColor:"white"}} titleStyle={{fontFamily: "Lexend-Regular", fontSize: 10,color:"gray",textTransform:"capitalize"}} title="Favorite" />
      </Tab>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
