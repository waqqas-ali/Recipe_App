import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Header = ({headerText,headerIcon}) => {
    return(
        <View style={style.Main}>
            <Text style ={style.TextIN}>{headerText}</Text>
            <FontAwesome name={headerIcon} color='#f96163' size={24}/>
        </View>
    );
};
const style = StyleSheet.create({
    Main : {
        flexDirection : 'row',
        paddingLeft : 9,
        paddingRight : 9,
        paddingBottom : 9
    },
    TextIN : {
        flex : 1,
        fontSize : 22,
        fontWeight : 'bold'
    }
})
export default Header