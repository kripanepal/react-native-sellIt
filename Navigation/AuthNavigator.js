import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen';
import Register from '../screens/Register';
import Welcome from '../screens/Welcome';
import routes from './routes';

function AuthNavigator() {
    const Stack = createStackNavigator()
    return (


        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name={routes.WELCOME} component={Welcome} />
            <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
            <Stack.Screen name={routes.REGISTER} component={Register} />
        </Stack.Navigator>

    );
};


export default AuthNavigator; 