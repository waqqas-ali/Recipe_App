import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import WellcomeScreen from "./Component/WellcomeScreen"
import HomeScreen from "./Component/HomeScreen"
import { Text, View } from "react-native";
import RecipeView from "./Component/RecipeView";

const Stack = createNativeStackNavigator();
const App = () => {
  return(
    <NavigationContainer independent = {true}>
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name="wellcome" component={WellcomeScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Recipe" component={RecipeView}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App