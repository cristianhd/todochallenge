import React, { Fragment, useEffect } from "react";
import { Button, Pressable, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { Container, Icons, Wrapper } from "./Styled";
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
    <Fragment>
      <Container>
        <View>
          <Text style={{ fontFamily: "Lexend-SemiBold", fontSize: 20 }}>
            Board
          </Text>
        </View>
        <Icons>
          <Ionicons name="search" size={20} color="gray" />
          <FontAwesome5 name="bell" size={20} color="gray" />
          <Ionicons name="menu" size={20} color="gray" />
        </Icons>
      </Container>
      <Wrapper>

      <Tab value={tab} 
        onChange={onChange} 
        indicatorStyle={{opacity:100,backgroundColor:"white" , borderBottomColor: "black",borderBottomWidth:5,}}
        
       
        
        >

        
        <Tab.Item style={{backgroundColor:"white"}} titleStyle={{margin: 0 ,fontFamily: "Lexend-Regular", fontSize: 10,color:"gray",textTransform:"capitalize"}}  title="All"/>
        <Tab.Item style={{backgroundColor:"white"}} titleStyle={{fontFamily: "Lexend-Regular", fontSize: 10,color:"gray",textTransform:"capitalize"}} title="Comp" />
        <Tab.Item style={{backgroundColor:"white"}} titleStyle={{fontFamily: "Lexend-Regular", fontSize: 10,color:"gray",textTransform:"capitalize"}} title="Uncom" />
        <Tab.Item style={{backgroundColor:"white"}} titleStyle={{fontFamily: "Lexend-Regular", fontSize: 10,color:"gray",textTransform:"capitalize"}} title="Favorite" />
      </Tab>
      </Wrapper>
    </Fragment>
  );
};

export default NavBar;
