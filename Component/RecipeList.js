import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {food} from '../Component/Constant';
import { useNavigation } from '@react-navigation/native';

const RecipeList = () =>  {
    const navigation = useNavigation()
  return (
    <View style={styles.Main}>
        <FlatList
        data={food}
        style={styles.FlatView}
        renderItem={({ item })=>(
            <TouchableOpacity style={styles.Touch} onPress={() => navigation.navigate('Recipe',{item : item})}>
                <View style={styles.ViewAll}>
                    <Image style={styles.viewImag} source={item.image}/>
                    <Text style={styles.TextLine}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )}
        keyExtractor={item => item.key}
        numColumns={2}
        columnWrapperStyle = {{
            justifyContent : 'space-around'
        }}
        />
    </View>
  )
}
const styles = StyleSheet.create({
    Main : {
        flex : 1
    },
    FlatView : {
        flex : 1
    },
    Touch : {
        padding : 30,
        justifyContent : 'center',
        backgroundColor : 'white',
        borderRadius : 17,
        shadowOpacity : 0.2,
        shadowRadius : 7,
        elevation : 10,
        marginTop : 10,
        marginBottom : 10
    },
    ViewAll : {
        alignItems : 'center',
        justifyContent : 'center',
    },
    viewImag : {
        width : 100,
        height : 100
    },
    TextLine : {
        fontSize : 16,
        marginTop : 9,

    }
})

export default RecipeList