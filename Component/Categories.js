import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { colors, data } from "../Component/Constant"

const Categories = () => {
    const [selectButton, setSelectButton] = useState()
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                data.map((item, index) => {
                    return (
                        <Pressable
                            key={index}
                            onPress={() => setSelectButton(item.id)}>
                            {
                                selectButton === item.id ?
                                    <View style={style.button}>
                                        <Text style={{ color: colors.COLOR_LIGHT, fontSize: 15 }}>{item.categories}</Text>
                                    </View> :
                                    <View style={style.catList}>
                                        <Text style={{ fontSize: 15 }}>{item.categories}</Text>
                                    </View>
                            }
                        </Pressable>
                    )
                })
            }
        </ScrollView>
    );
};
const style = StyleSheet.create({
    catList: {
        backgroundColor: colors.COLOR_LIGHT,
        marginRight: 36,
        borderRadius: 8,
        marginRight: 36,
        paddingHorizontal: 18,
        paddingVertical: 10,
        shadowOpacity: 0.2,
        shadowRadius: 7,
        elevation : 10,
        marginVertical: 16
    },
    button: {
        backgroundColor: colors.COLOR_PRIMARY,
        marginRight: 36,
        borderRadius: 8,
        marginRight: 36,
        paddingHorizontal: 18,
        paddingVertical: 10,
        shadowOpacity: 0.2,
        shadowRadius: 7,
        elevation : 10,
        marginVertical: 16
    }
})
export default Categories