import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, Pressable,FlatList,ScrollView} from 'react-native';
import * as React from 'react';
import SearchHeader from '../Components/SearchHeader';
import TopAnimeBox from '../Components/TopAnimeBox';
import CurrentSeason from '../Components/CurrentSeason';
import StudioGhibliList from '../Components/StudioGhibliList';

export default function SearchScreen() {
    const [animeList, SetAnimeList]=React.useState([]);
    const[topAnime, SetTopAnime] = React.useState([]);
    const[seasonAnime, SetSeasonAnime] = React.useState([]);
    const[ghibliAnime, SetGhibliAnime] = React.useState([]);

    const moment = require('moment'); 

    global.year = moment().year();
    global.month = moment().get('month') + 1;

    console.log(year);
    console.log(month);

    const GetTopAnime = async() => {
        try {
            const response = await fetch(`https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=25`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const temp = await response.json();
            if (temp && temp.data) {
                SetTopAnime(temp.data.slice(0,25));
            } else {
                console.error('Data structure is not as expected:', data);
            }
        } catch (error) {
            console.error('Error fetching top anime:', error);
        }
    }

    const GetSeasonAnime = async() =>{
        try {
            const response = await fetch(`https://api.jikan.moe/v4/seasons/now?sfw`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const temp = await response.json();
            if (temp && temp.data) {
                SetSeasonAnime(temp.data.slice(0,25));
            } else {
                console.error('Data structure is not as expected:', data);
            }
        } catch (error) {
            console.error('Error fetching top anime:', error);
        }
    }
    const GetGhibliAnime = async() =>{
        try {
            const response = await fetch(`https://api.jikan.moe/v4/anime?producers=21`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const temp = await response.json();
            if (temp && temp.data) {
                SetGhibliAnime(temp.data.slice(0,25));
            } else {
                console.error('Data structure is not as expected:', data);
            }
        } catch (error) {
            console.error('Error fetching top anime:', error);
        }
    }

    React.useEffect(() => {
        GetTopAnime();
        GetSeasonAnime();
        GetGhibliAnime();
    }, []);

    return(
        <View style={styles.container}> 
            <View style={styles.box}>
                <Text style={styles.searchText}> Place SearchBar here</Text>
            </View>
                <ScrollView
                >
                    <TopAnimeBox
                    topAnime ={topAnime}
                    />
                    <CurrentSeason
                    seasonAnime ={seasonAnime}
                    />
                    <StudioGhibliList
                    ghibliAnime ={ghibliAnime}
                    />
                    <Text>{global.userId}</Text>
                    <Text>{global.loginName}</Text>
                    <Text>{global.firstName}</Text>
                </ScrollView>
            
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
    box:
    {
        backgroundColor: '#111920',
        height:125,
        alignItems:'center',
        justifyContent: 'center',
    },
    searchText:{
     
        color:"#fff",
        justifyContent:'center'
    }
});