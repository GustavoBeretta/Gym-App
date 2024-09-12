import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsScreen from './screens/NewsScreen';
import TutorialsScreen from './screens/TutorialsScreen';
import GymsScreen from './screens/GymsScreen';
import Navbar from './components/NavBarr';
import Header from './components/Header';
import { View } from 'react-native';
import GymDetails from './screens/GymDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View>
        <Header />
      </View>
      <Stack.Navigator>
        <Stack.Screen
          name="News"
          component={NewsScreen}
        />
        <Stack.Screen
          name="Gyms"
          component={GymsScreen}
        />
        <Stack.Screen
          name="Tutorials"
          component={TutorialsScreen}
        />
        <Stack.Screen
          name="Gym Details"
          component={GymDetails}
        />

      </Stack.Navigator>
      <Navbar />
    </NavigationContainer>
  );
}

