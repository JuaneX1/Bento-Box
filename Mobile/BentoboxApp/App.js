import * as React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from "./screens/StartScreen";
import LoginScreen from "./screens/Login";
import SignUpScreen from "./screens/SignUp";




const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen 
        name="Welcome" 
        component = {StartScreen}
        options = {{
          title:"Welcome",
          headerStyle:{
            backgroundColor:'#111920'
          },
          headerTintColor: '#111920',

        }}
        />
        <Stack.Screen  name="Login"
        component = {LoginScreen}
        
        options = {{
          title:"Login",
          headerTitle:{
            backgroundColor:'#111920',
            tintColor:'#111920'
          },
         headerStyle:{
          backgroundColor:"#111920"
         },
         headerBackTitleStyle:{
          textColor:"#fff",
          fontSize:16
         }
          
        }}
        />
        <Stack.Screen  
        name = "SignUp" 
        component = {SignUpScreen}
        
        options = {{
          title:"Login",
          headerTitle:{
            backgroundColor:'#111920',
            tintColor:'#111920'
          },
         headerStyle:{
          backgroundColor:"#111920"
         },
         headerBackTitleStyle:{
          textColor:"#fff",
          fontSize:16
         }
          
        }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}
