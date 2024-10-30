import React from "react";
import { Text, View,StyleSheet, SafeAreaView, Platform } from "react-native";
import Header from "../Component/Header"
import SearchFilter from "../Component/SearchFilter"
import Categories from "../Component/Categories";
import RecipeList from "../Component/RecipeList";

const HomeScreen = () => {
    return(
        <SafeAreaView style={style.Main}>
            <Header headerText={" Hi, Waqqas"} headerIcon={"bell-o"}/>
            <SearchFilter icon='search'/>
            <View style={style.CATView}>
                <Text style={style.CATText}>Categories</Text>
                <Categories/>
            </View>

            <View style={{flex : 1}}>
                <Text style={[style.CATText,{paddingLeft : 10}]}>Recipes</Text>
                <RecipeList />
            </View>
        </SafeAreaView>
    );
};
const style = StyleSheet.create({
    Main : {
        flex : 1,
        paddingTop : Platform.OS === 'android' ? 30 : 0
    },
    CATView : {
        paddingLeft : 10
    },
    CATText : {
        fontSize : 22,
        fontWeight : "bold",

    }
})
export default HomeScreen