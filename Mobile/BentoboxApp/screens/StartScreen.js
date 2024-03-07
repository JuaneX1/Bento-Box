import * as React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./Login";
import SignUpScreen from "./SignUp";

export default function StartScreen({navigation}) {
    return (
            <View style={styles.container}>
                <Image 
                    style={styles.image}
                    //source={require('../assets/BB Logo Icon_COLOR.png')}
                    />
                <Pressable
                    style={styles.button}
                    onPress={() => {
                    // Handle sign in action
                    navigation.navigate(LoginScreen)
                    console.log("Sign in button pressed");
                    }}
                >
                    <Text style={styles.buttonText}>Sign In</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, { backgroundColor: '#3077b2' }]}
                    onPress={() => {
                    // Handle sign up action
                    navigation.navigate(SignUpScreen)
                    console.log("Sign up button pressed");
                    }}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>
                <StatusBar style="auto" />
                </View>
    );
                }
    
                const styles = StyleSheet.create({
                    container: {
                      flex: 1,
                      backgroundColor: '#111920',
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                    image: {
                      width: 105,
                      height: 110,
                      marginBottom: 50,
                    },
                    button: {
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 200,
                      height: 50,
                      borderRadius: 25,
                      backgroundColor: '#fff',
                      marginBottom: 20,
                    },
                    buttonText: {
                      color: '#111920',
                      fontSize: 18,
                      fontWeight: 'bold',
                    },
                  });
                  