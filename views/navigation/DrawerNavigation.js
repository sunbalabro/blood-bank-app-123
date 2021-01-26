import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ContactStackNavigator } from "./StackNavigation";
import BottomTabNavigator from "./TabNavigation";
const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator>
        <Drawer.Screen name="Home" component={BottomTabNavigator} />
        <Drawer.Screen name="Contact" component={ContactStackNavigator} />
      </Drawer.Navigator>        
    )
}
