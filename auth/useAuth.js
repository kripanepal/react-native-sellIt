import React, { useContext } from 'react';
import AuthContext from './context';
import storage from './storage';
import jwtDecode from 'jwt-decode'
function useAuth() {
    const { user, setUser } = useContext(AuthContext)
    const logout = () => {
        storage.deleteToken();
        setUser(null)
    }

    const login = (authToken) => {
        const user = jwtDecode(authToken)
        setUser(user)
        storage.storeToken(authToken)
    }
    const register = (authToken) => {
        const user = jwtDecode(authToken)
        setUser(user)
        storage.storeToken(authToken)
    }

    return { user, setUser, logout, login, register }
};

export default useAuth; 