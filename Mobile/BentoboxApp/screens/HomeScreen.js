import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, Pressable } from 'react-native';
import * as React from 'react';

export default function HomeScreen() {
    return(
        <View style={styles.container}>
        <Text>{global.userId}</Text>
        <Text>{global.loginName}</Text>
        <Text>{global.firstName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111920',
      alignItems: 'center',
      justifyContent: 'center',
    }
});