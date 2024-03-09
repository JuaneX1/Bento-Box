import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator,createAppContainer } from '@react-navigation/native-stack';
import LoginScreen from "../screens/Login";
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

function LoginStack() {
  return (
    <NavigationContainer
    independent={true}
    >
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Home"  
        component={HomeScreen} 
        options={{
            headerShown:false
        }
        }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LoginStack;
 