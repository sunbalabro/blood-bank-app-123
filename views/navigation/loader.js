import React from 'react'
import {View, Image} from "react-native"

export default function LoaderScreen() {
    return (
     <View>
         <Image source={require("../../loader.gif")} style={{width:380,height:700}} alt="loader"/>
     </View>
    )
}
