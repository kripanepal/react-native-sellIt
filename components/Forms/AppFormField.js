import React from 'react';
import AppTextInput from '../AppTextInput';
import ErrorMessages from './ErrorMessages';
import { useFormikContext } from 'formik'
function AppFormField({ name, width, ...other }) {
    const { setFieldTouched, touched, errors, setFieldValue, values } = useFormikContext()
    return (
        <>
            <AppTextInput
                width={width}
                onChangeText={text => setFieldValue(name, text)}
                value={values[name]}
                placeholder={name}

                {...other}
                onBlur={() => setFieldTouched(name)}
                pla
            />
            <ErrorMessages error={errors[name]} show={touched[name]} />
        </>
    );
}

export default AppFormField;