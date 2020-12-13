import React from 'react';
import { useFormikContext } from 'formik'
import AppPicker from '../AppPicker'
import ErrorMessages from './ErrorMessages';

function AppFormPicker({ items, placeholder, name, width, PickerItemComponent, numColumns }) {
    const { errors, values, touched, setFieldValue } = useFormikContext()

    return (
        <>
            <AppPicker
                width={width}
                placeholder={placeholder}
                items={items}
                PickerItemComponent={PickerItemComponent}
                selectedItem={values[name]}
                onSelectItem={(item) => setFieldValue(name, item)}
                numColumns={numColumns}
            />
            <ErrorMessages error={errors[name]} show={touched[name]} />
        </>
    );
}

export default AppFormPicker;