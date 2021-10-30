import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
  View,
  Text
} from 'react-native';
import { HomeScreen } from './src/screens/Home';

const App = () => {
  return (
    <SafeAreaView>
    <HomeScreen />
    </SafeAreaView>
  );
};


export default App;
