import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View, TextInput, Button, Image, Pressable } from 'react-native';
import * as React from 'react';
import Home from './HomeScreen';


global.loginName = '';
global.password = '';
global.userId = -1;
global.firstName = '';
global.lastName = '';


export default function Login({navigation}) {

  handleClick = async () =>
{
  try
  {
    var obj = {login:global.loginName.trim(),password:global.password.trim()};
    console.log("obj");
    var js = JSON.stringify(obj);
    
    console.log("js");
    const response = await fetch('http://localhost:5000/api/login', {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

    console.log("response");
    var res = JSON.parse(await response.text());

    console.log("res");
    
    if( res.id <= 0 )
    {
      console.log ("User/Password combination incorrect" );
    }
    else
    {
      global.firstName = res.firstName;
      global.lastName = res.lastName;
      global.loginName = res.email;
     
      global.userId = res.id;
      navigation.navigate(Home);
    }
  }
  catch(e)
  {
   console.log({message: e.message });
  }
}

changeLoginNameHandler = async (val) =>
{
global.loginName = val;

}
changePasswordHandler = async (val) =>
{
global.password = val;
}

  return (
    
    <View style={styles.container}>
      <Image 
      style={styles.image}
      source={require('../assets/BB Logo Icon_COLOR.png')}
      />
      <Text style={styles.text}>Login: </Text>
      <TextInput
        style={styles.input}
        placeholder="Username*"
        onChangeText={(val) => { this.changeLoginNameHandler(val) }}
        
      />
      <Text style={styles.text}>Password: </Text>
      <TextInput
        style={styles.input}
        placeholder="Password*"
        type="password"
        secureTextEntry={true}
        onChangeText={(val) => { this.changePasswordHandler(val) }}
        
      />
      
      <Pressable
        style = {styles.submitButton}
        onPress={() =>{
          navigation.navigate('Home')
          }
        }
        //this.handleClick</View>
        
      >
        <Text style={styles.text}>Login</Text>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    width: 200,
    padding: 10,
    borderRadius: 15,
    backgroundColor:"#ffffff",
    borderColor:'#3077b2'
  },
  image: {
    width: 105,
    height: 110,
    margin:20,
    marginLeft: 25
  },

  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    elevation: 3, 
    backgroundColor: '#3077b2',
  },
  text:{
    color:'white'
  }
});
