import React, { useState, useEffect} from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState('');
    const id = navigation.getParam('id');
    

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    };

    useEffect(() => {
        getResult(id)
    }, []);
     
    if(!result) {
        return null;
    }
    
    return (
        <View>
            <Text style={styles.title}>{result.name}</Text>
            <FlatList data={result.photos}
            keyExtractor={(photo) => photo} 
            renderItem = {({ item }) => {
                return <Image style={styles.image} source={{ uri: item }} />
            }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        margin: 10,
        height: 200,
        width: 200
    },
    title: {
        color: 'green',
        margin: 10,
        fontSize: 20
    }
})

export default ResultsShowScreen;