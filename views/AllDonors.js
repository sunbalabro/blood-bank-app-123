import React from 'react'
import {View, Text, Button, Image, StyleSheet, ScrollView } from "react-native"
import auth from '@react-native-firebase/auth';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function AllDonors() {
    const LogoutUser = () =>{
        auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    } 

    const donors=[
        {
          bloodGroup:"A+",
            userName:'sunbal',
            city:'karachi'
        },
        {
            bloodGroup:"A-",
            userName:'shama',
            city:'lahore'
        },
        {
            bloodGroup:"O-",
            userName:'zakir',
            city:'hyderabad'
        },
        {
            bloodGroup:"AB+",
            userName:'Yasir',
            city:'karachi'
        },
        {
            bloodGroup:"B+",
            userName:'Sabir',
            city:'karachi'
        },
        {
            bloodGroup:"B+",
            userName:'Sabir',
            city:'karachi'
        },
        {
            bloodGroup:"B+",
            userName:'Sabir',
            city:'karachi'
        },
    ]
    return (
        <ScrollView>
        <View>
                    <Button 
            title="signout"
            onPress={LogoutUser}
            />
            {donors.map(({userName,city,bloodGroup}) =>(
             
                 <View style={styles.list}>
                <Image source={require('../user.jpg')} style={{width:60,marginRight:5,marginLeft:5,height:70,resizeMode:"contain"}}/>
                  <View style={{width:185}}>
                  <Text style={{fontSize:15,fontWeight:"bold"}}>{userName}</Text>
                  <Text style={{fontSize:15,fontWeight:"bold"}}>{city}</Text>
                  <Text style={{fontSize:15,fontWeight:"bold"}}>{bloodGroup}</Text>
                  </View>
                  <View>
                      {/* <FontAwesomeIcon icon={ faCoffee } /> */}
                      <Image source={require('../call.jpg')} style={{width:100,height:100,resizeMode:"contain"}} />
                      </View>
                  </View>
   
             ))}
            
            </View>
       
            </ScrollView>  
    )
}
const styles = StyleSheet.create({
    list:{
        borderWidth:1,
        borderColor:"black",
        marginTop:10,
        display:"flex",
        flexDirection:'row',
        backgroundColor:"white"
    }
})