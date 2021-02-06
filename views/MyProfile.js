import React,{useEffect,useState} from 'react'
import {View,Text,Image} from "react-native"
import database from "@react-native-firebase/database"
import auth from "@react-native-firebase/auth"
export default function MyProfile({userId}) {
  const user = auth().currentUser.uid;    
   
  const [userName, setuserName] = useState('')
    
    // console.log(user)
                
     useEffect(() => {
      database().ref(`/user/${user.uid}`).once('value').then((snapshot) => {
        console.log('snapshot user' ,snapshot.val())
                // ...
                const username = snapshot.val().firstName;
                  setuserName(username)
              });   
      //  return () => {
       
      //  }
     }, [])
    return (
     <View style={{backgroundColor:"red",flex:1}}>
         <View style={{borderWidth:1,borderColor:"black",
         alignItems:"center",marginTop:30,backgroundColor:"white"}}>
         <Image source={require('../logoimage.png')} style={{width:150,height:80
            }}/>
            <Text style={{fontStyle:"italic",fontSize:15}}>Donate Blood save life</Text>
         </View>
         
         <Text>My Profile </Text>
         <Text>blood {userName}</Text>
     </View>  
    )
}
