import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import useAuth from '../auth/useAuth';
import Icon from '../components/Icon';
import ItemSeparator from '../components/ItemSeparator';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import routes from '../Navigation/routes';

function AccountScreen({ navigation }) {
    const { user, setUser, logout } = useAuth()
    const menuItems = [
        { title: 'My Listings', icon: { name: 'format-list-bulleted', backgroundColor: colors.primary, size: 30 } },
        { title: 'Messages', icon: { name: 'email', backgroundColor: colors.secondary, size: 30 }, targetScreen: routes.MESSAGES }
    ]



    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <ListItem title={user.name} subtitle={user.email}
                    profileImage="https://picsum.photos/200/100" />
            </View>
            <View style={styles.container}>
                <FlatList data={menuItems}
                    keyExtractor={(item) => item.title}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={({ item }) => {
                        return <ListItem title={item.title}
                            iconComponent={<Icon name={item.icon.name}
                                backgroundColor={item.icon.backgroundColor}
                            />}
                            onPress={() => navigation.navigate(item.targetScreen)} />


                    }
                    }
                />
            </View>

            <ListItem title="Log out" onPress={() => logout()} iconComponent={<Icon name='logout' backgroundColor='#ffe66d' />} />




        </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        marginVertical: 20
    },
    screen:
    {
        backgroundColor: colors.light
    }
})

export default AccountScreen;