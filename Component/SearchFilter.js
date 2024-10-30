import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'

const SearchFilter = ({icon}) => {
  const [text,setText] = useState('')
  return (
    <View style={styles.Main}>
      <FontAwesome name={icon} size={20} color={'#f96163'} />
        <TextInput style={styles.TextIn} 
        onChangeText={setText} 
        value={text}
        placeholder='Enter the Recipe'/>
    </View>
  )
}
const styles = StyleSheet.create({
    Main : {
        backgroundColor : "#fff",
        flexDirection : 'row',
        paddingVertical : 16,
        paddingHorizontal : 16,
        marginVertical : 16,
        marginHorizontal : 16,
        borderRadius : 8,
        shadowOpacity : 0.2,
        shadowRadius : 7,
        elevation : 10
    },
    TextIn : {
      flex : 1,
      paddingLeft : 8,
      fontSize : 16,
      color : '#808080'
    }
})
export default SearchFilter