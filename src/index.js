import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import firebase from '@react-native-firebase/app'
import { View } from 'react-native'

import Router from './routes'
import DefaultStatusBar from './components/StatusBar'

export default function App() {

  const credentials = {
    clientId: "764614417487-s59hi5p91heema67l3h6gn85ldhk8fdr.apps.googleusercontent.com",
    appId: "1:764614417487:ios:4de4f98984ade60867de3a",
    apiKey: "AIzaSyBsktdTOoZzd-i_EZAAuxjr5OjRQBP3280",
    databaseURL: "",
    storageBucket: "pdim-ffirestore.appspot.com",
    messagingSenderId: "764614417487",
    projectId: "pdim-ffirestore"
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