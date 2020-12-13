import { AppForm, AppFormField, SubmitButton } from '../components/Forms'
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Yup from 'yup'
import AppFormPicker from '../components/Forms/AppFormPicker';
import CategoryPickerItem from '../components/CategoryPickerItem';
import ImageImportList from '../components/ImageImportList';
import FormImagePicker from '../components/Forms/FormImagePicker';
import useLocation from '../hooks/useLocation';
import listingsApi from '../api/listings'
import UploadScreen from './UploadScreen';

const validationShema = Yup.object().shape({
    title: Yup.string().required(),
    price: Yup.number().required(),
    description: Yup.string().required(),
    category: Yup.object().required(),
    images: Yup.array().min(1, "Please select at least one image")

})

const categories = [
    { value: "Furniture", label: "Furniture", backgroundColor: 'red', icon: 'apps' },
    { value: 'housing', label: 'housing', backgroundColor: 'blue', icon: 'lock' },
    { value: 'kk', label: 'housing', backgroundColor: 'blue', icon: 'lock' },
    { value: 'll', label: 'housing', backgroundColor: 'blue', icon: 'lock' },
    { value: 'g', label: 'ssssssssssssss', backgroundColor: 'blue', icon: 'lock' },
    { value: 's', label: 'housing', backgroundColor: 'blue', icon: 'lock' },
    { value: 'd', label: 'housing', backgroundColor: 'blue', icon: 'lock' },]


function ListingEditScreen() {

    const [showProgress, setShowProgress] = useState(false)
    const [progress, setProgress] = useState(0)

    const onUploadProgress = progress => {
        setProgress(progress)
    }
    const handleSubmit = async (listing, { resetForm }) => {
        setShowProgress(true)
        const result = await listingsApi.addListing(listing, onUploadProgress);


        if (!result.ok) {
            setShowProgress(false)
            alert('Something went wrong')
            return
        }

        resetForm()


    }

    return (
        <>
            <UploadScreen progress={progress} visible={showProgress} onDone={() => setShowProgress(false)} />
            <View style={styles.container}>
                <AppForm style={styles.container}
                    initialValues={{ title: "", price: '', category: '', description: "", images: [] }}
                    validationSchema={validationShema}
                    onSubmit={handleSubmit}
                >
                    <FormImagePicker name='images' />
                    <AppFormField
                        name='title'
                        autoCapitalize='none'
                        autoCorrection={false} placeholder="Title" />

                    <AppFormField
                        name='price'
                        keyboardType={'numeric'}
                        width={120}
                    />

                    <AppFormPicker
                        name='category'
                        placeholder='Category'
                        items={categories}
                        width='50%'
                        PickerItemComponent={CategoryPickerItem}
                        numColumns={3}
                    />

                    <AppFormField
                        name='description'
                        autoCorrection={false}
                        multiLine
                        numberOfLines={3}
                    />
                    <SubmitButton title='Post' />

                </AppForm>
            </View>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})

export default ListingEditScreen;