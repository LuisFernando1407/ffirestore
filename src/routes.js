import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Header from '../src/components/Header'

import Home from '../src/pages/Home'
import Details from '../src/pages/Details'

const Router = createStackNavigator({
        HomeScreen: Home,
        DetailsScreen: Details
    }, {
        headerMode: 'screen',
        defaultNavigationOptions: ({ navigation }) => ({
            header: <Header 
                title={navigation.getParam('title', 'Firebase Firestore (Students)')} 
                navigation={navigation}
                iconBackIsVisible={navigation.getParam('iconBack', false)}
            />
        }),
    }
)

export default createAppContainer(Router)