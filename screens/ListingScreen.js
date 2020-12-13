import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text } from 'react-native';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Card from '../components/Card';
import listingsApi from '../api/listings'
import colors from '../config/colors';
import routes from '../Navigation/routes';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import useApi from '../hooks/useApi';
function ListingScreen({ navigation }) {
    const { data: listings, error, loading, request: loadListings } = useApi(listingsApi.getListings)

    useEffect(() => {
        loadListings()
    }, [])


    return (
        <>
            {error && <>
                <AppText>Something Went wrong</AppText>
                <AppButton onPress={loadListings} title='Reload' />
            </>}
            { loading && <ActivityIndicator size="large" color="#0000ff" />}
            <FlatList data={listings}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) =>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate(routes.LISTING_DETAILS, { image: item.images[0].url, title: item.title, subTitle: item.price })}>
                        <Card title={item.title} subTitle={"$" + item.price} imageUrl={item.images[0].url} />
                    </TouchableWithoutFeedback>
                }

            />

        </>

    );
}



export default ListingScreen;