import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./views/navigation/DrawerNavigation";
import MainNavigation from "./views/navigation/MainNavigation"
import Register from "./views/register"
import MultipleSelect from "./views/MultipleSelect"
import AllDonors from "./views/AllDonors"
export default function App() {
  
  return (
    // <AllDonors/>
    // <MultipleSelect/>
  // <Register/>
    <NavigationContainer>
    <MainNavigation />    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});


