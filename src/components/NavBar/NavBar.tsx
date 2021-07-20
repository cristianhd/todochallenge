import React , {Fragment} from "react";
import { Text, View } from "react-native";
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { Container, Icons, Wrapper } from "./Styles";

const NavBar =()=>{
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

            </Wrapper>
        </Fragment>
    )
};

export default NavBar;

