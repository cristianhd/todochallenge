import React , {Fragment, useEffect} from "react";
import { Button, Pressable, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { Container, Icons, Wrapper } from "./Styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Tab } from 'react-native-elements';

const NavBar =()=>{

    const [tab,setTab] = useState<number>(0)
    
    const dispatch = useDispatch()
    
    
    const onChange = (tab:number)=>{
        setTab(tab);
        dispatch({type:"CHANGE_TAB",payload:tab})
    }
    console.log("nav",tab);
    
    return (
        <Fragment>
            <Container>
                <View>
                    <Text>Board</Text>
                </View>
                <Icons>
                    <Ionicons name="search" size={15} color="gray" />
                    <FontAwesome5 name="bell" size={15} color="gray" />
                    <Ionicons name="menu" size={15} color="gray" />
                </Icons>
            </Container>
            <Tab value={tab} onChange={onChange}>
  <Tab.Item title="All" />
  <Tab.Item title="Complete" />
  <Tab.Item title="Uncomplete" />
  <Tab.Item title ="Favorite"/>
</Tab>

        </Fragment>
    )
};

export default NavBar;

