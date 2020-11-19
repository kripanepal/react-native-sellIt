import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';

function ListingScreen(props) {
    const listings = [
        { id: 1, title: "Jacket", price: 100, image: "https://picsum.photos/200/100" },
        { id: 2, title: "Couch", price: 500, image: "https://picsum.photos/400/400" },
        { id: 3, title: "Phone", price: 999.99, image: "https://picsum.photos/200" }
    ]
    return (

        <Screen style={styles.screen}>
            <FlatList data={listings}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Card title={item.title} subTitle={"$" + item.price} imageUrl={item.image} />}

            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen:
    {
        padding: 10,
        backgroundColor: colors.light
    }
})

export default ListingScreen;