import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home.js";
import Formulario from "./screens/Formulario.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Formulario" component={Formulario}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}