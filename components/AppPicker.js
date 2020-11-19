import React, { useState } from 'react';
import { View, StyleSheet, Modal, Text, Button, FlatList } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';
import AppText from './AppText';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import PickerItem from './PickerItem';

function AppPicker({ icon, items, placeholder, selectedItem, onSelectItem }) {

    const [show, setShow] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setShow(!show)}>

                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={25} color={colors.medium} />}
                    <AppText style={styles.text}> {selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons name={'chevron-down'} size={25} color={colors.medium} />
                </View>
            </TouchableWithoutFeedback>

            <Modal visible={show} animationType={"slide"} collapsable>
                <Button title="Close" onPress={() => setShow(!show)} />
                <FlatList
                    data={items}
                    keyExtractor={(item) => item.value.toString()}
                    renderItem={({ item }) =>
                        <PickerItem label={item.label} onPress={() => {
                            setShow(false)
                            onSelectItem(item)
                        }
                        } />}
                />

            </Modal>
        </>

    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        marginVertical: 10,
        padding: 15,
        alignItems: 'center'
    },
    text: {
        flex: 1, paddingLeft: 10
    }

})
export default AppPicker;