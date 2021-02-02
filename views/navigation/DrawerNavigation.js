import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ContactStackNavigator } from "./StackNavigation";
import BottomTabNavigator from "./TabNavigation";
import CreateRequest from '../CreateRequest';
const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator>
        <Drawer.Screen name="Home" component={BottomTabNavigator} />
        <Drawer.Screen name="Request" component={ContactStackNavigator} />
        <Drawer.Screen name="Add Request" component={CreateRequest}/>
      </Drawer.Navigator>        
    )
}
