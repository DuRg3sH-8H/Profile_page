import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import UserProfile from './Pages/UserProfile';
import LoginRegister from './Pages/LoginRegister';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contact from './Pages/Contact';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
       <Contact/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;