import React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable'

function ListItem({ profileImage, title, subtitle, onPress, renderRightActions, iconComponent }) {
    return (
        <Swipeable renderRightActions={renderRightActions} friction={2} >
            <TouchableHighlight underlayColor='lightblue' onPress={onPress} >

                <View style={styles.profileInfo}>
                    {iconComponent}
                    {profileImage && <Image style={styles.profileImage} resizeMode='cover' source={{
                        uri: profileImage,

                    }} />}
                    <View style={styles.profileText}>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                        {subtitle && <Text style={styles.subtitle}>
                            {subtitle}
                        </Text>}
                    </View>
                </View>

            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({

    profileInfo: {

        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    profileImage: {
        borderRadius: 50, height: 70, width: 70
    },
    profileText:
    {
        justifyContent: 'center',
        padding: 5,
        paddingLeft: 10
    },
    title: {
        fontWeight: "bold", fontSize: 18, marginBottom: 5
    },
    subtitle:
    {
        color: 'grey'
    }

})
export default ListItem;