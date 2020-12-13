import React from 'react';
import { Modal, StyleSheet, View, } from 'react-native';
import AppText from '../components/AppText';
import * as Progress from 'react-native-progress'
import colors from '../config/colors';
import LottieView from 'lottie-react-native';

function UploadScreen({ progress = 0, visible = false, onDone }) {
    if (visible) {

        return (
            <Modal visible={visible}>

                <View style={styles.container} >
                    {progress < 1 ? <Progress.Bar progress={progress} width={200} color={colors.primary} /> :
                        <LottieView style={styles.animation} autoPlay loop={false} onAnimationFinish={onDone} source={require('../assets/done.json')} />
                    }

                </View>
            </Modal>

        );
    }

    return null
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    animation: {
        width: 150
    }

})

export default UploadScreen; 