import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Screen from '../components/Screen';
import * as yup from 'yup'
import { AppFormField, SubmitButton, AppForm } from '../components/Forms';

const validationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(2)
})

function LoginScreen() {

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={{ uri: 'https://i.pinimg.com/564x/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg' }} />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => { console.log(values) }}
                validationSchema={validationSchema}
            >

                <AppFormField
                    name='email'
                    icon='email'
                    autoCapitalize='none'
                    autoCorrection={false}
                    keyboardType={'email-address'}
                />
                <AppFormField
                    icon='lock'
                    name='password'
                    autoCapitalize='none'
                    autoCorrection={false}
                    secureTextEntry
                />
                <SubmitButton title="Login" />

            </AppForm>
        </Screen>
    );
}
const styles = StyleSheet.create({
    logo:
    {
        width: 80, height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    },
    container: {
        padding: 10
    }
})
export default LoginScreen;