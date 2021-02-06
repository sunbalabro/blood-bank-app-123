import React,{useState,useEffect} from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ContactStackNavigator } from "./StackNavigation";
import BottomTabNavigator from "./TabNavigation";
import CreateRequest from '../CreateRequest';
import {Text,View,Image,SafeAreaView} from "react-native"
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import database from "@react-native-firebase/database"
const Drawer = createDrawerNavigator();
const MyTheme = {
  
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(0, 47, 52)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
export default function DrawerNavigation(props) {
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
  
<Drawer.Navigator theme={MyTheme} drawerContent={(props) => <CustomSidebar {...props} />}>
    <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Request" component={ContactStackNavigator} />
      <Drawer.Screen name="Add Request" component={CreateRequest}/>
    </Drawer.Navigator>
  
                
    )
}

function CustomSidebar(props){
  return(
    <DrawerContentScrollView {...props}>
      <Image
        source={require('../../user.jpg')}
        style={{resizeMode: 'center',width: 100,height: 100,}}
      />
   <Text>{userName}</Text>
<DrawerItemList {...props} />
<DrawerItem
          label="Visit Us"
          onPress={() => console.log('success')}
        />
    </DrawerContentScrollView>
    
  )
}
