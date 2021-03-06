import React, { useState } from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Picker
} from 'react-native';
import Ima2 from "../backreg.jpg"
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [selectedValue, setSelectedValue] = useState("AB+");
  
const RegisterUser=({ userId })=>{
  
  auth()
  .createUserWithEmailAndPassword(email, password)
  .then((result) => {
    console.log('User account created & signed in!' , result);
    const user = result

  database().ref(`/user/${user.uid}`).set({
    email:email,
    password:password,
    firstName:firstName,
    lastName:lastName,
    phoneNumber:phoneNumber,
    selectedValue:selectedValue

  });
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
}
   return (
   <ScrollView>
<View>
<ImageBackground source={Ima2} style={{width:360,height:750,resizeMode:"cover"}} >
    
     <View style={styles.card}>
     <Text style={styles.heading}>Register</Text>
       <TextInput
        style={{height: 40,borderBottomWidth:1,width:250,borderBottomColor:"red"}}
        placeholder="Email address"
        onChangeText={text => setEmail  (text)}
        value={email}
      />
      <TextInput
        style={{height: 40,borderBottomWidth:1,width:250,marginTop:20,borderBottomColor:"red"}}
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={text => setPassword  (text)}
        value={password}
      />
            <TextInput
        style={{height: 40,borderBottomWidth:1,width:250,marginTop:20,borderBottomColor:"red"}}
        placeholder="First name"
        onChangeText={text => setfirstName  (text)}
        value={firstName}
      />
            <TextInput
        style={{height: 40,borderBottomWidth:1,width:250,marginTop:20,borderBottomColor:"red"}}
        placeholder="Last name"
        onChangeText={text => setlastName  (text)}
        value={lastName}
      />
            <TextInput
        style={{height: 40,borderBottomWidth:1,width:250,marginTop:20,borderBottomColor:"red"}}
        placeholder="Phone number"
        onChangeText={text => setphoneNumber  (text)}
        value={phoneNumber}
      />
        <Text style={{width:250,marginTop:10}}>Blood Group</Text>
       <View style={{width:250}}>
       <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="AB+" value="AB+" style={{width:20}} />
        <Picker.Item label="AB-" value="AB-" style={{width:20}} />
        <Picker.Item label="B+" value="B+" style={{width:20}} />
        <Picker.Item label="B-" value="B-" style={{width:20}} />
        <Picker.Item label="O+" value="O+" style={{width:20}} />
        <Picker.Item label="O-" value="O-" style={{width:20}} />
        <Picker.Item label="A+" value="A+" style={{width:20}} />
        <Picker.Item label="A-" value="A-" style={{width:20}} />
              
      </Picker>
       </View>
       
        <TouchableOpacity onPress={RegisterUser} style={styles.button}>
        <Text style={{fontWeight:"bold",color:"white",marginTop:10}}>Register</Text>
      </TouchableOpacity>
      
      
     </View>
    </ImageBackground>
    </View>
 
   </ScrollView>
    )
}

const styles = StyleSheet.create({
  heading:{
    fontSize:20,
    color:"red",
    fontWeight:"bold",
    marginTop:30
  },
  card: {
    width:300,
    borderWidth:2,
    borderColor:"white",
    alignItems:"center",
    marginTop:100,
    marginLeft:20,
    backgroundColor:"white",
    borderRadius:7,
    },
    button:{
      backgroundColor:"red",
      width:250,
      borderWidth:1,
      borderColor:"red",
      borderRadius:6,
      height:40,
      marginTop:10,
      alignItems:"center"
    }
});


