import React, { useState } from 'react';
import { StyleSheet, Image, View, ActivityIndicator } from 'react-native';
import Screen from '../components/Screen';
import * as yup from 'yup'
import { AppFormField, SubmitButton, AppForm, ErrorMessages } from '../components/Forms';
import auth from '../api/auth';
import useAuth from '../auth/useAuth';
import useApi from '../hooks/useApi';
const validationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(2)
})

function Register() {
    const [registerFailed, setregisterFailed] = useState(false)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { login } = useAuth()


    const handleSubmit = async (userInfo) => {
        setLoading(true)
        const result = await auth.register(userInfo)

        if (!result.ok) {
            setLoading(false)
            setregisterFailed(true)
            if (result.data)
                setError(result.data.error)
            else {
                setError("Something went wrong")
            }
            return
        }
        const { data: authToken } = await auth.login(userInfo.email, userInfo.password)
        setregisterFailed(false)
        setLoading(false)
        login(authToken)
    }

    return (
        <View style={styles.container}>
            { loading && <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />}
            <Image
                style={styles.logo}
                source={{ uri: 'https://i.pinimg.com/564x/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg' }} />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >

                <AppFormField
                    name='name'
                    icon='account'
                    autoCapitalize='none'
                    autoCorrection={false}
                />
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
                <ErrorMessages error={error} show={registerFailed} />

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
        margin: 10,
        flex: 1,
    },
    loader:
    {
        flex: 1,
        position: 'absolute',
        opacity: 0.8,
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        zIndex: 1,
    }
})
export default Register;