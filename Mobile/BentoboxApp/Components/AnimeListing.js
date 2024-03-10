import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, Pressable, FlatList} from 'react-native';
import * as React from 'react';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
//<Text style={styles.animeTitleText}>{anime.titles.find(title => title.type === "English")?.title || anime.title}</Text>
export default function AnimeListing({anime}) {
    
    return(
        <View style={styles.card} key={anime.mal_id}>
            <Pressable>
            <Image style={styles.animeImages} source={{ uri: anime.images.jpg.image_url }} />
            </Pressable>
                
                
        </View>
       
    );
}

const styles = StyleSheet.create({
   
    animeTitleText:{
        color:"#ffffff",
        zIndex:2,
        alignSelf:'center'
       
    },
    animeImages: {
        width: windowWidth/3,
        height: windowHeight/4,
        alignSelf:'center'
    },
    card:{
        margin:windowWidth/35,
        alignItems:'center'
    }
});