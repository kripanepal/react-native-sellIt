import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MyTheme from './Navigation/NavigationTheme'
import OffLineMessage from './screens/OffLineMessage';
import AuthNavigator from './Navigation/AuthNavigator';
import AuthContext from './auth/context'
import HomeNavigator from './Navigation/HomeNavigator';
import storage from './auth/storage';
import { AppLoading } from 'expo'
import { navigationRef } from './Navigation/rootNavigation';
export default function App() {
  const [user, setUser] = useState()
  const [isReady, setIsReady] = useState(false)

  const reStoreUser = async () => {
    const user = await storage.getUser()
    if (!user) return
    setUser(user)

  }


  if (!isReady)
    return <AppLoading startAsync={reStoreUser} onFinish={() => setIsReady(true)} />

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OffLineMessage />
      <NavigationContainer theme={MyTheme} ref={navigationRef}>
        {user ? <HomeNavigator /> : <AuthNavigator />}

      </NavigationContainer>

    </AuthContext.Provider >




  );
}



