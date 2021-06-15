
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { SafeAreaView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/screen/Home/HomeScreen';
import FlashMessage from 'react-native-flash-message';

import Forum from './src/screen/Forum/Forum';


const Stack = createStackNavigator();

export default class App extends Component {
  // componentDidMount() {
  //   SplashScreen.hide()
  // }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#ff5c5c" }}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}
            initialRouteName="HomePage"
          >

            <Stack.Screen name="HomePage" component={HomePage} />

            <Stack.Screen name="Forum" component={Forum} />

          </Stack.Navigator>
        </NavigationContainer>
        <FlashMessage position="top" />
      </SafeAreaView>
    );
  }
}
