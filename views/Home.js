import React from 'react'
import {View, Text, Button, StyleSheet } from "react-native"
import auth from '@react-native-firebase/auth';

export default function Home({ navigation }) {
    
const LogoutUser = () =>{
    auth()
  .signOut()
  .then(() => console.log('User signed out!'));
} 
return(
<View style={styles.center}>
            <Text>Home</Text>
            <Button 
            title="Go to About Screen "
            onPress={() => navigation.navigate("About")}
            />
            <Button 
            title="signout"
            onPress={LogoutUser}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  });