import React , {Fragment, useEffect} from "react";
import { Button, Pressable, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { Container, Icons, Wrapper } from "./Styles";
import { useState } from "react";
import { useDispatch } from "react-redux";

const NavBar =()=>{

    const [tab,setTab] = useState<string>("all")
    const dispatch = useDispatch()
    
    const onChange = (tab:string)=>{

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
            <Wrapper>
                <Pressable 
                    onPress={()=>onChange("all")}>
                        <Text>All</Text>
                </Pressable>
                <Pressable 
                    onPress={()=>onChange("complete")}>
                        <Text>Completed</Text>
                </Pressable>
                <Pressable 
                    onPress={()=>onChange("uncomplete")}>
                        <Text>Uncompleted</Text>
                </Pressable>
                <Pressable 
                    onPress={()=>onChange("favorites")}>
                        <Text>Favorite</Text>
                </Pressable>  
            </Wrapper>
        </Fragment>
    )
};

export default NavBar;

