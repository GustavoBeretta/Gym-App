import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsScreen from './screens/NewsScreen'; 
import TutorialsScreen from './screens/TutorialsScreen';
import GymsScreen from './screens/GymsScreen'; 
import Header from './components/Header';
import { Image, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'News') {
              iconName = require('./assets/news.png')
            } else if (route.name === 'Gyms') {
              iconName = require('./assets/gyms.png')
            } else if (route.name === 'Tutorials') {
              iconName = require('./assets/tutorials.png')
            }

            return <Image source={iconName} style={{ width: 50, height: 50 }} />;
          },
          tabBarShowLabel: false,
          tabBarStyle: { backgroundColor: 'red', height: 70 },
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="News"
          component={NewsScreen}
        />
        <Tab.Screen
          name="Gyms"
          component={GymsScreen}
        />
        <Tab.Screen
          name="Tutorials"
          component={TutorialsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}