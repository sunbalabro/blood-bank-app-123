import React from 'react'
import {View, Image} from "react-native"
import Loader from "../../loader.gif"
export default function loader() {
    return (
     <View>
         <Image source={Loader} alt="loader"/>
     </View>
    )
}
