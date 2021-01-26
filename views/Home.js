import React from 'react'
import {View, Text, Button, StyleSheet } from "react-native"

export default function Home({ navigation }) {
    return (
        <View style={styles.center}>
            <Text>Home</Text>
            <Button 
            title="Go to About Screen "
            onPress={() => navigation.navigate("About")}
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