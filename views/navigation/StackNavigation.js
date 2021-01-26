// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Home";
import About from "../About";
import Contact from "../Contact"
const Stack = createStackNavigator();
const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  };
const StackNavigation = () => {
  return (
    <Stack.Navigator  screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};
const ContactStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    );
  };
export { StackNavigation,ContactStackNavigator };