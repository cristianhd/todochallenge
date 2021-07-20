import React , {Fragment} from "react";
import { Button, Pressable, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { Container, Icons, Wrapper } from "./Styles";
import { useState } from "react";

const NavBar =()=>{

    const [state,setState] = useState("All")
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
                    onPress={()=>alert("all")}>
                        <Text>All</Text>
                </Pressable>
                <Pressable 
                    onPress={()=>alert("completed")}>
                        <Text>Completed</Text>
                </Pressable>
                <Pressable 
                    onPress={()=>alert("uncompleted")}>
                        <Text>Uncompleted</Text>
                </Pressable>
                <Pressable 
                    onPress={()=>alert("favorite")}>
                        <Text>Favorite</Text>
                </Pressable>  
            </Wrapper>
        </Fragment>
    )
};

export default NavBar;

