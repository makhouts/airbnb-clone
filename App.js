import React from 'react';
import { SafeAreaView, useColorScheme, View, Text } from 'react-native';
import { HomeScreen } from './src/screens/Home';
import { Post } from './src/components/Post';
import { SearchResult } from './src/screens/SearchResult';
import feed from './feed';
import { DestinationSearch } from './src/screens/DestinationSearch';



const App = () => {
  return (
    <SafeAreaView>
      <DestinationSearch />
    </SafeAreaView>
  );
};

export default App;
