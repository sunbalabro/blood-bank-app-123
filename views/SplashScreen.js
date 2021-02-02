import React from 'react'
import {View,Image,Text} from "react-native"
export default function SplashScreen() {
    return (
      <View style={{}}>
     {/* <View style={{}}>
     <Image source={require('../splash.png')} style={{width:250,height:150,marginTop:250,resizeMode:"contain",
        marginLeft:40,}}/>
     
         </View>     
          <View style={{marginLeft:30,marginTop:200}}>
<Text style={{color:"white",fontSize:20,fontWeight:"600"}}>Donate blood save life</Text>
</View> */}
 <Image source={require('../loader.gif')} style={{width:370,height:700}}/>
      </View>
    )
}
