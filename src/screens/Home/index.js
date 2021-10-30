import React from "react";
import { View, Text, ImageBackground, Pressable } from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

export const HomeScreen = (props) => {
    return(
        <View>
            <Pressable 
                style={styles.searchButton} 
                onPress={() => console.warn('Search btn')}
            >
                <Fontisto name='search' size={25} color={'#F15454'} />
                <Text style={styles.searchButtonText}>Where are you going?</Text>
            </Pressable>

            <ImageBackground 
                source={require('../../../assets/wallpaper.jpg')} 
                style={styles.image}
            >
                <Text style={styles.title}>Go Near</Text>
                
                <Pressable 
                 style={styles.button} 
                 onPress={() => console.warn('explore btn')}
                >
                    <Text style={styles.buttonText}>Explore nearby places</Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
};

