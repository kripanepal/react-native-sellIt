import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import colors from '../config/colors';

function Card({ title = 'title', subTitle = 'sub title', imageUrl = 'https://picsum.photos/200/300' }) {
    return (
        <View style={styles.card}>
            <View style={styles.imageView}>

                <Image style={styles.image} source={{
                    uri: imageUrl,
                    width: '100%', height: '100%'
                }} />
            </View>
            <View style={styles.info}>

                <Text style={styles.title} >{title}</Text>
                <Text style={styles.subTitle} >{subTitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    card:
    {
        height: 300,
        paddingHorizontal: 20,
        marginTop: 20

    },
    imageView:
    {
        borderRadius: 50,

        height: '80%',

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
export default Card;