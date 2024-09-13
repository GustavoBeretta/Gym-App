import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GymsScreen from '../screens/GymsScreen';
import GymDetails from '../screens/GymDetails';

const Stack = createStackNavigator();

const GymsStack = () => {
    return (
        <Stack.Navigator initialRouteName="Gyms" >
            <Stack.Screen
                name="Home"
                component={GymsScreen}
                options={{ title: 'Gyms', headerShown: false }} // Defina as opções conforme necessário
            />
            <Stack.Screen
                name="GymDetails"
                component={GymDetails}
                options={{ title: 'Details' }} // Defina as opções conforme necessário
            />
        </Stack.Navigator>
    );
};

export default GymsStack;
