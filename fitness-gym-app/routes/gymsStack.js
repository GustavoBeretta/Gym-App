import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GymsScreen from '../screens/GymsScreen';
import GymDetails from '../screens/GymDetails';

const Stack = createStackNavigator();

const GymsStack = () => {
    return (
        <Stack.Navigator initialRouteName="Gyms">
            <Stack.Screen
                name="Gyms"
                component={GymsScreen}
                options={{ title: 'Gyms List' }} // Defina as opções conforme necessário
            />
            <Stack.Screen
                name="GymDetails"
                component={GymDetails}
                options={{ title: 'Gym Details' }} // Defina as opções conforme necessário
            />
        </Stack.Navigator>
    );
};

export default GymsStack;
