import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ListingEditScreen from '../screens/ListingEditScreen';
import NavigationIcon from './NavigationIcon';
import FeedNavigator from './FeedNavigator';
import NavigatorButton from './NavigatorButton';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions'
import AccountNavigator from './AccountNavigator';
import routes from './routes';
import expoPushToken from '../api/expoPushToken';
import navigation from './rootNavigation';

function HomeNavigator() {
    console.log(navigation)
    useEffect(() => {
        registerForPushNotofications()
        Notifications.addListener(notification => {
            console.log(notification)
            navigation.navigate('account')
        })
    }, [])

    const registerForPushNotofications = async () => {

        try {
            const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS)
            if (!permission.granted) return
            const token = await Notifications.getExpoPushTokenAsync()
            expoPushToken.register(token.data)
        } catch (error) {
            console.log(error)
        }

    }
    const Tabs = createBottomTabNavigator()

    return (

        <Tabs.Navigator>
            <Tabs.Screen name={routes.ALL_LISTINGS} component={FeedNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => <NavigationIcon name={'home'} size={size} color={color} />,
                    title: "Feed"
                }} />
            <Tabs.Screen name={routes.NEW_LISTING} component={ListingEditScreen} options={({ navigation }) => ({
                tabBarIcon: ({ color, size }) => <NavigationIcon name={'plus'} size={size} color={color} />,
                tabBarButton: () => <NavigatorButton onPress={() => navigation.navigate(routes.NEW_LISTING)} />

            })} />
            <Tabs.Screen name={routes.ACCOUNT_SCREEN} component={AccountNavigator} options={{
                tabBarIcon: ({ color, size }) => <NavigationIcon name={'account'} size={size} color={color} />,
                title: "Account"

            }} />
        </Tabs.Navigator>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1
    },

})

export default HomeNavigator; 