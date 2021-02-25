import React, { useEffect } from 'react'

import { Dimensions, Text } from 'react-native'

import { View } from '../Details/style'

const Details = ( { navigation } ) => {
    const { width } = Dimensions.get('window')
    const { params } = navigation.state 

    useEffect(() => {
        navigation.setParams({title: params.name, iconBack: true})
    }, [])


    return (
        <View width={(width - 40)}>
            <Text>Course: {params.course}</Text>
            <Text>Age: {params.age}</Text>
        </View>
    )
}

export default Details