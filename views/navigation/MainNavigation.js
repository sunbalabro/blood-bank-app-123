import React from 'react'
import DrawerNavigation from "./DrawerNavigation"
import AuthNavigation from "./AuthNavigation"
const Stack = createStackNavigator(); 
export default function MainNavigation() {
    return (
      <Stack.Navigator>
          <Stack.Screen name="Home" component={DrawerNavigation}/>
          <Stack.Screen name="Auth" Component={AuthNavigation} />
          
      </Stack.Navigator>      
    )
}
