import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from '../components/Icon';
import ItemSeparator from '../components/ItemSeparator';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';

function AccountScreen(props) {

    const menuItems = [
        { title: 'My Listings', icon: { name: 'format-list-bulleted', backgroundColor: colors.primary, size: 30 } },
        { title: 'Messages', icon: { name: 'email', backgroundColor: colors.secondary, size: 30 } }
    ]
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem title="Kripa Nepal" subtitle="kripanepal20@gmail.com"
                    profileImage="https://picsum.photos/200/100" />
            </View>
            <View style={styles.container}>
                <FlatList data={menuItems}
                    keyExtractor={(item) => item.title}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={({ item }) => {
                        console.log(item);
                        return <ListItem title={item.title} iconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />} />

                    }
                    }
                />
            </View>

            <ListItem title="Log out" iconComponent={<Icon name='logout' backgroundColor='#ffe66d' />} />




        </Screen>
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