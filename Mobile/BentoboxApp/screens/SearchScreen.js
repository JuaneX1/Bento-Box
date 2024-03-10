import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, Pressable,FlatList,ScrollView} from 'react-native';
import * as React from 'react';
import SearchHeader from '../Components/SearchHeader';
import TopAnimeBox from '../Components/TopAnimeBox';


export default function SearchScreen() {
    const [animeList, SetAnimeList]=React.useState([]);
    const[topAnime, SetTopAnime] = React.useState([]);

    const GetTopAnime = async() => {
        try {
            const response = await fetch(`https://api.jikan.moe/v4/anime?order_by=popularity&limit=25`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const temp = await response.json();
            if (temp && temp.data) {
                SetTopAnime(temp.data.slice(1,25));
            } else {
                console.error('Data structure is not as expected:', data);
            }
        } catch (error) {
            console.error('Error fetching top anime:', error);
        }
    }

    React.useEffect(() => {
        GetTopAnime();

        console.log(topAnime)
    }, []);

    console.log(topAnime)
    return(
        <View style={styles.container}> 
            <ScrollView
            >
                <TopAnimeBox
                topAnime ={topAnime}
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
    }
});