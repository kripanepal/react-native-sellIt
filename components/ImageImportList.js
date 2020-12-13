import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View, } from 'react-native';
import ImageInput from './ImageInput';

function ImageImportList({ imageUris = [], onRemoveImage, onAddImage }) {
    const scrollView = useRef();

    return (
        <View>

            <ScrollView horizontal
                ref={scrollView}
                onContentSizeChange={() => scrollView.current.scrollToEnd()
                }>

                <View style={styles.container} >
                    {imageUris.map(uri =>
                        <ImageInput
                            key={uri}
                            givenUri={uri}
                            onChange={() => onRemoveImage(uri)}
                        />)}

                    <ImageInput
                        onChange={(uri) => onAddImage(uri)}
                    />
                </View>
            </ScrollView>
        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },

})

export default ImageImportList; 