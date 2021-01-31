import React ,{useState,useEffect} from 'react'
import DrawerNavigation from "./DrawerNavigation"
import AuthNavigation from "./AuthNavigation"
import LoaderScreen  from "./loader.js"
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator(); 

export default function MainNavigation() {

     // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(false);
  
  // Handle user state changes
  function onAuthStateChanged(user) {
    console.log(user)
    setUser(user);
    if (initializing) setInitializing(false);
  }
   useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
    
     if (!user) {
    return (
 
          <AuthNavigation />         
   
    );
  }else{
   return (
      <DrawerNavigation />
      
    )
  }
    
}
