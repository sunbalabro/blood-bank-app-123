import React, { useState } from 'react'
import {View,Text,Picker,TouchableOpacity,ImageBackground,
    ScrollView,TextInput,StyleSheet} from "react-native"
import Ima2 from "../backreg.jpg"
import database from '@react-native-firebase/database';

export default function CreateRequest() {

  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [selectedValue, setSelectedValue] = useState("AB+");
  const [textArea, settextArea] = useState("")
  
  const createRequest = () => {
    database().ref('/request/'+key).push({
      firstName:firstName,
      lastName:lastName,
      phoneNumber:phoneNumber,
      selectedValue:selectedValue,
      textArea:textArea,
    })
  }
 
  return (
        <ScrollView>

        
        <View>
        <ImageBackground source={Ima2} style={{width:360,height:750,resizeMode:"cover"}} >
            
             <View style={styles.card}>
             <Text style={styles.heading}>Create Request</Text>
            
                    <TextInput
                style={{height: 40,borderBottomWidth:1,width:250,marginTop:20,borderBottomColor:"red"}}
                placeholder="First name"
                onChangeText={text => setfirstName  (text)}
                value={firstName}
                maxLength={10}
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
                <Text style={{width:250,marginTop:10,fontWeight:'bold'}}>Blood Group</Text>
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
      <View>
      <Text style={{fontWeight:"bold",marginTop:10}}>Write your request</Text>
               <TextInput
    onChangeText={text => settextArea(text)}
    style={{ width:250,height:100,borderWidth:1,borderColor:"black"    }}
    value={textArea}
    placeholder="Write your request"
    />
      </View>
      
                <TouchableOpacity onPress={createRequest} style={styles.button}>
                <Text style={{fontWeight:"bold",color:"white",marginTop:10}}>Create Request</Text>
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
  
  
  