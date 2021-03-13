import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import { Dimensions, Text } from 'react-native'

import { Content, ContentButton } from '../Register/style'
import Button from '../../components/Button'
import EditText from '../../components/EditText'

const Register = ( { navigation } ) => {
    const { width } = Dimensions.get('window')
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [course, setCourse] = useState()

    useEffect(() => {
        navigation.setParams({title: "Register", iconBack: true})
    }, [])

    const registerStudent = () => {
       firestore()
       .collection("students")
       .add({
           age,
           course,
           name
       })
       .then(() => {
        navigation.goBack()
       }).catch((error) => console.log(error))
    }

    const handleName = (value) => {
        setName(value)
    }

    const handleAge= (value) => {
        setAge(value)
    }

    const handleCourse = (value) => {
        setCourse(value)
    }

    return (
        <Content width={(width - 40)}>
            
            <Text style={{fontSize: 16, marginBottom: 5}}>Name</Text>
            <EditText 
                style={{marginTop: 20}}
                placeholder=""
                onChangeText={handleName}
                keyboardType="default"
                maxLength={36}
                />

            <Text style={{fontSize: 16, marginBottom: 5, marginTop: 20}}>Age</Text>
            <EditText 
                style={{marginTop: 20}}
                placeholder=""
                onChangeText={handleAge}
                maxLength={3}
                />

            <Text style={{fontSize: 16, marginBottom: 5, marginTop: 20}}>Course</Text>
            <EditText 
                style={{marginTop: 20}}
                placeholder=""
                onChangeText={handleCourse}
                keyboardType="default"
                maxLength={36}
                />
        
            <ContentButton>
                <Button title="Submit" handle={registerStudent} />
            </ContentButton>
          
        </Content>
    )
}

export default Register