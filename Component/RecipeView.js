import { Entypo, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Image, SafeAreaView, Text, ScrollView, Platform } from "react-native";

const RecipeView = (props) => {
    const { item } = props.route.params
    const navigation = useNavigation()
    return (
        <View style={style.Main}>
            <View style={style.InnerMain1}>
                <SafeAreaView style={style.SafeView}>
                    <FontAwesome name="arrow-left" size={28} onPress={() => navigation.navigate('Home')} />
                    <Text style={style.NameDeg}>{item.name}</Text>
                    <FontAwesome name="heart-o" size={28} />
                </SafeAreaView>
                <Image style={style.ImagePho} source={item.image} />
                <View style={{ flexDirection: 'row' }}>
                    <View style={style.TimeRateCal}>
                        <Text style={style.emoji}>⏰</Text>
                        <Text>{item.time}</Text>
                    </View>
                    <View style={style.TimeRateCal}>
                        <Text style={style.emoji}>🍲</Text>
                        <Text>{item.difficulty}</Text>
                    </View>
                    <View style={style.TimeRateCal}>
                        <Text style={style.emoji}>🔥</Text>
                        <Text>{item.calories} Cal</Text>
                    </View>
                </View>
            </View>
            <ScrollView style={style.InnerMain2}>
                <Text style={{paddingHorizontal : 10, paddingVertical : 10,fontSize : 25, fontWeight : 'bold'}}>Description</Text>
                <Text style={{paddingHorizontal : 10, fontSize : 18}}>{item.description}</Text>
                <Text style={{paddingHorizontal : 10, paddingVertical : 10, fontSize : 25, fontWeight : 'bold'}}>Ingredients</Text>
                {
                    item.ingredients.map((ingredient)=> {
                        return(
                            <View style={{flexDirection : 'row', paddingHorizontal : 18, paddingVertical : 3}}>
                                <Entypo name="bowl" size={20}/>
                                <Text style={{paddingLeft : 5, paddingRight : 12, fontSize : 18}}>{ingredient}</Text>
                            </View>
                        )
                    })
                }
                <Text style={{paddingHorizontal : 10, paddingVertical : 10,fontSize : 25, fontWeight : 'bold'}}>Directions</Text>
                {
                    item.directions.map((direaction)=> {
                        return(
                            <View style={{flexDirection : 'row', paddingVertical : 6, paddingHorizontal : 12}}>
                                <Entypo name="bowl" size={20}/>
                                <Text style={{paddingEnd : 30, paddingStart : 5, fontSize : 18}}>{direaction}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
};
const style = StyleSheet.create({
    Main: {
        flex: 1,
    },
    SafeView: {
        // paddingTop : Platform.OS === 'android' ? 0 : 0,
        flexDirection: 'row',
        marginBottom : 20,
    },
    InnerMain1: {
        flex: 1,
        backgroundColor: 'white',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 2.2,
        shadowRadius: 10,
        elevation: 10, 
        paddingTop : Platform.OS === 'android' ? 30 : 0 ,
        paddingBottom : Platform.OS === 'android' ? 30 : 10
    },
    InnerMain2: {
        flex: 1.5,
    },
    NameDeg: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 130,
        marginRight: 130
    },
    TimeRateCal: {
        backgroundColor: 'yellow', 
        paddingHorizontal : 30,
        paddingVertical : 20,
        margin : 9,
        alignItems: 'center',
        borderRadius : 20
    },
    emoji : {
        fontSize : 28
    },
    ImagePho: {
        width: 200,
        height: 200
    }
})
export default RecipeView