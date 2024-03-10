import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, Pressable, FlatList} from 'react-native';
import * as React from 'react';

export default function AnimeListing({anime}) {
    console.log(anime.title);
    console.log(anime.images.jpg.image_url);
    return(
        <View key={anime.mal_id}>
                <Image style={styles.animeImages} source={{ uri: anime.images.jpg.image_url }} />
                <Text style={styles.animeText}>{anime.title}</Text>
        </View>
       
    );
}

const styles = StyleSheet.create({
   
    animeTitleText:{
        color:"#ffffff",
        zIndex:2
    },
    animeImages: {
        width: 50,
        height: 100
    }
});