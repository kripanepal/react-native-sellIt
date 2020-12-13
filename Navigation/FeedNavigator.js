import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen';
import Register from '../screens/Register';
import ListingScreen from '../screens/ListingScreen';
import ListingDetail from '../screens/ListingDetail';
import routes from './routes';


function FeedNavigator() {
    const StackNavigator = createStackNavigator()

    return (
        <StackNavigator.Navigator mode='modal' >
            <StackNavigator.Screen name={routes.ALL_LISTINGS} component={ListingScreen} options={{ title: "All Listings" }} />
            <StackNavigator.Screen name={routes.LISTING_DETAILS} component={ListingDetail} options={{ headerShown: false }} />
        </StackNavigator.Navigator>
    )
};


export default FeedNavigator; 