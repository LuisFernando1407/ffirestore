import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import firebase from '@react-native-firebase/app'
import { View } from 'react-native'

import Router from './routes'
import DefaultStatusBar from './components/StatusBar'

export default function App() {

  const credentials = {
    clientId: "****",
    appId: "****",
    apiKey: "****",
    databaseURL: "****",
    storageBucket: "****",
    messagingSenderId: "****",
    projectId: "****"
  }

  if (!firebase.apps.length) firebase.initializeApp(credentials) 
  else firebase.app()
  
  return (
    <View style={{flex: 1}}>
       <DefaultStatusBar backgroundColor="#0a043c" barStyle="light-content" />
        <SafeAreaProvider>
            <Router/>
        </SafeAreaProvider>  
    </View>
  )
}