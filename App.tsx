import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import UserProfile from './Pages/UserProfile';
import LoginRegister from './Pages/LoginRegister';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <LoginRegister />

      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
