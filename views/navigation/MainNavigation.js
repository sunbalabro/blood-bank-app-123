import React ,{useState,useEffect} from 'react'
import DrawerNavigation from "./DrawerNavigation"
import AuthNavigation from "./AuthNavigation"
import LoaderScreen  from "./loader.js"
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import SplashScreen from '../SplashScreen';
import database from '@react-native-firebase/database';

const Stack = createStackNavigator(); 

export default function MainNavigation() {

     // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(false);
  const [loading,setLoading] = useState(true)
  // Handle user state changes
  function onAuthStateChanged(user) {
    console.log(user)
    if(user){
      setUser(user);
      database().ref('/user/').once('value').then((snapshot) => {
        // ...
        console.log(snapshot.val())
        setLoading(false)
      })
      .catch((err)=>{
        console.log(err)
      });
      
    }else{
      setUser(user);
      setLoading(false)

    }
    if (initializing) setInitializing(false);
  }
   useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
    
if(loading){
  return <SplashScreen />
}

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
