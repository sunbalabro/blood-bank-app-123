import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./views/navigation/DrawerNavigation";
import Loader from "./views/navigation/loader"
export default function App() {
  
  return (
    <Loader/>
    // <NavigationContainer >
    // <DrawerNavigation />    
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});


