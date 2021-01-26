import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../login";
import Register from "../register";
const Stack = createStackNavigator();

export default function AuthNavigation() {
    return (
        
        <Stack.Navigator>
          <Stack.Screen name="Log In" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
          );
}
