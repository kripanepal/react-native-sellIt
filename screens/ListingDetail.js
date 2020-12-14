import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Platform, KeyboardAvoidingView, Keyboard } from 'react-native';
import colors from '../config/colors';
import ListItem from '../components/ListItem';
import ContactSellerForm from '../components/ContactSellerForm';
import { useRef } from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

function ListingDetail({ route }) {
    return (
        <KeyboardAwareScrollView

            scrollEnabled={false}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View >
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

                    <View style={{ paddingTop: 50 }}>
                        <ContactSellerForm listingsId={route.params.listingId} />
                    </View>

                </View>
            </TouchableWithoutFeedback>

        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',

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