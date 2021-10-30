import React from 'react';
import {SafeAreaView, useColorScheme, View, Text} from 'react-native';
import {HomeScreen} from './src/screens/Home';
import { Post } from './src/components/Post';


const App = () => {
  return (
    <SafeAreaView>
      <Post />
    </SafeAreaView>
  );
};

export default App;
