import React, { useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import * as yup from 'yup'
import { AppFormField, SubmitButton, AppForm, ErrorMessages } from '../components/Forms';
import auth from '../api/auth'
import useAuth from '../auth/useAuth';

const validationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(2)
})



function LoginScreen() {
    const [loginFailed, setLoginFailed] = useState(false)
    const { login } = useAuth()


    const handleSubmit = async ({ email, password }) => {
        const result = await auth.login(email, password)

        if (!result.ok) {

            setLoginFailed(true)
            return
        }
        setLoginFailed(false)
        login(result.data)
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={{ uri: 'https://i.pinimg.com/564x/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg' }} />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessages error='Invalid Email or password' show={loginFailed} />
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
        </View>
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