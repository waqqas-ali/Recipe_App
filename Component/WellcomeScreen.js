import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native"


const WellcomeScreen = (props) => {
    return(
        <View style={styles.Main}>
            <Image  style ={styles.Image}source={require('../assets/images/food_image.png')}/>
            <Text style ={styles.TextLine1}>Best Premium Recipes</Text>
            <Text style={styles.TextLine2}>Cook Like A  Chef</Text>
            <TouchableOpacity style={styles.Button} onPress={() => props.navigation.navigate('Home')}>
                <Text style={styles.ButtonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    Main : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    },
    TextLine1 : {
        fontSize : 22,
        color : '#f96163',
        fontWeight : 'bold',
        padding : 30
    },
    TextLine2 : {
        fontSize : 42,
        fontWeight : 'bold',
        color : '#3c444c',
        marginBottom : 50,
    },
    Image : {
        width : 400,
        height : 400,
    },
    Button : {

        backgroundColor : '#f96163',
        borderRadius : 18,
        paddingVertical : 18,
        width : "80%",
        alignItems : 'center',
        shadowColor : 'black',
        shadowOpacity : 20,
        elevation : 7
    },
    ButtonText : {
        fontSize : 20,
        color : 'white',
        fontWeight : '700'
    }
})
export default WellcomeScreen