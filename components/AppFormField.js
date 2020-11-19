import React from 'react';
import AppTextInput from './AppTextInput';
import ErrorMessages from './ErrorMessages';
import { useFormikContext } from 'formik'
function AppFormField({ name, ...other }) {
    const { setFieldTouched, touched, handleChange, errors } = useFormikContext()
    return (
        <>
            <AppTextInput
                {...other}
                onChangeText={handleChange(name)}
                placeholder={name}
                onBlur={() => setFieldTouched(name)}
            />
            <ErrorMessages error={errors[name]} show={touched[name]} />
        </>
    );
}

export default AppFormField;