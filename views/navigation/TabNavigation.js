// ./navigation/TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StackNavigation, ContactStackNavigator } from "./StackNavigation";
import MyProfile from "../MyProfile";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All Donors" component={StackNavigation} />
      <Tab.Screen name="Contact" component={ContactStackNavigator} />
    <Tab.Screen name="My Profile" component={MyProfile}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;