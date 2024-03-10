import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,FlatList } from 'react-native';
import React from 'react';
import AnimeListing from './AnimeListing';


const TopAnimeBox = ({ topAnime }) => {
    for(anime in topAnime){
        console.log(anime.image_url);
    }
    return (
        <FlatList
        keyExtractor={(item) => item.mal_id}
        horizontal={true}
        data={topAnime}
        renderItem={({item}) =>(
                <AnimeListing
                anime={item}/>
        )}/>
            
    
        
    );
}

const styles = StyleSheet.create({
    headerText: {
        color: "#fff",
        marginLeft: 75,
        height: 300,
        fontSize: 25,
        fontWeight: 'bold'
    },
    animeText: {
        fontSize: 12,
        color: "#fff"
    },
    animeImages: {
        width: 50,
        height: 100
    }
});

export default TopAnimeBox;
