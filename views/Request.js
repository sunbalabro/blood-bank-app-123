import React from "react";
import { View, StyleSheet, Text,ScrollView } from "react-native";

const Request = () => {
  return (
    <ScrollView>
   <View style={styles.center}>
    <Text>Request</Text>      
    </View>
    </ScrollView>
 
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Request;