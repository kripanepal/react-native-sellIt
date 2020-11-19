import React from 'react';
import { useFormikContext } from 'formik'
import AppPicker from '../AppPicker'
import ErrorMessages from './ErrorMessages';

function AppFormPicker({ items, placeholder, name }) {
    const { errors, values, touched, setFieldValue } = useFormikContext()

    return (
        <>

            <AppPicker placeholder={placeholder} items={items} selectedItem={values[name]} onSelectItem={(item) => setFieldValue(name, item)} />
            <ErrorMessages error={errors[name]} show={touched[name]} />
        </>
    );
}

export default AppFormPicker;