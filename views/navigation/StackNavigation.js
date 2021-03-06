// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Home";
import About from "../About";
import Request from "../Request"
import AllDonors from "../AllDonors"
import CreateRequest from "../CreateRequest";
import MyProfile from "../MyProfile";
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
      <Stack.Screen name="All Donors" component={AllDonors} />
      <Stack.Screen name="My Profile" component={MyProfile} />
      <Stack.Screen name="Create Request" component={CreateRequest}/>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};
const ContactStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Requests" component={Request} />
      </Stack.Navigator>
    );
  };
export { StackNavigation,ContactStackNavigator };