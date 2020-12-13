import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import AccountScreen from '../screens/AccountScreen';
import Messages from '../screens/Messages';
import routes from './routes';


function AccountNavigator() {
    const StackNavigator = createStackNavigator()

    return (
        <StackNavigator.Navigator >
            <StackNavigator.Screen name={routes.ACCOUNT_SCREEN} component={AccountScreen} options={{ headerShown: false }} />
            <StackNavigator.Screen name={routes.MESSAGES} component={Messages} />
        </StackNavigator.Navigator>
    )
};


export default AccountNavigator; 