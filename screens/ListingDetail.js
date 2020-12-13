import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

function ListingDetail({ route }) {

    return (

        <View style={styles.container}>
            <View style={styles.imageView}>

                <Image style={styles.image} resizeMode='cover' source={{
                    uri: route.params.image,

                }} />
            </View>
            <View style={styles.info}>
                <Text style={styles.title} >{route.params.title}</Text>
                <Text style={styles.subTitle} >{route.params.subTitle}</Text>

            </View>
            <ListItem profileImage={`https://picsum.photos/100/100`} title='Krip Nepal' subtitle='10 listings' />
        </View>

    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',

    },
    container:
    {
        marginTop: 20, flex: 1,
    },
    imageView:
    {
        borderRadius: 50, height: 400, width: '100%'
    },
    title:
    {
        fontSize: 20
    },
    subTitle:
    {
        fontSize: 15,
        color: colors.secondary
    },
    info:
    {
        paddingLeft: 20,
        paddingBottom: 10,
        backgroundColor: 'white',

    }

})

export default ListingDetail;