import React from 'react';
import { View, Text, FlatList } from 'react-native';
import feed from '../../../feed';
import { Post } from '../../components/Post';

export const SearchResult = () => {
    return (
        <View>
            <FlatList 
                data={feed}
                renderItem={({item}) => {
                    return <Post post={item} />
                }}
            />
        </View>
    )
};
