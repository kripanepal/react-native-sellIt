import { AppForm, AppFormField, SubmitButton } from '../components/Forms'
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Yup from 'yup'
import AppFormPicker from '../components/Forms/AppFormPicker';
const validationShema = Yup.object().shape({
    title: Yup.string().required(),
    price: Yup.number().required(),
    description: Yup.string().required(),
    category: Yup.object().required()

})

const categories = [{ value: "Furniture", label: "Furniture" }, { value: 'housing', label: 'housing' }]
function ListingEditScreen() {
    return (
        <View style={styles.container}>
            <AppForm style={styles.container}
                initialValues={{ title: "", price: '', category: '', description: "" }}
                validationSchema={validationShema}
                onSubmit={(values) => { console.log(values) }}
            >
                <AppFormField
                    name='title'
                    autoCapitalize='none'
                    autoCorrection={false} />
                <AppFormField
                    name='price'
                    keyboardType={'numeric'} />
                <AppFormPicker name='category' placeholder='Category' items={categories} />
                <AppFormField name='description'
                    autoCorrection={false}
                    multiLine
                    numberOfLines={3}
                />
                <SubmitButton title='Post' />

            </AppForm>
        </View>



    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})

export default ListingEditScreen;