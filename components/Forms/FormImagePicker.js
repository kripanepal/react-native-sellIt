import React from 'react';
import { StyleSheet, View, } from 'react-native';
import ImageImportList from '../ImageImportList';
import ErrorMessages from './ErrorMessages';
import { useFormikContext } from 'formik'


function FormImagePicker({ name }) {
    const { errors, values, setFieldValue, touched } = useFormikContext()

    const handleAdd = (uri) => {
        setFieldValue(name, [...values[name], uri])
    }
    const handleRemove = (uri) => {
        setFieldValue(name, values[name].filter(eachuri => uri !== eachuri))
    }

    return (
        <>
            <ImageImportList
                imageUris={values[name]}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove} />
            <ErrorMessages error={errors[name]} show={touched[name]} />
        </>
    );
};


export default FormImagePicker; 