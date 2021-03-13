import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import { Dimensions, Text } from 'react-native'

import { Content, ContentButton } from '../Edit/style'
import Button from '../../components/Button'
import EditText from '../../components/EditText'

const Edit = ( { navigation } ) => {
    const { width } = Dimensions.get('window')
    const { params } = navigation.state 
    const [name, setName] = useState(params.name)
    const [age, setAge] = useState(params.age)
    const [course, setCourse] = useState(params.course)

    useEffect(() => {
        navigation.setParams({title: "Edit", iconBack: true})
    }, [])

    const updateStudent = () => {
       firestore()
       .collection("students")
       .doc(params.id)
       .update({
           age,
           course,
           name
       })
       .then(() => {
        navigation.navigate('HomeScreen')
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
                placeholder={params.name}
                onChangeText={handleName}
                keyboardType="default"
                maxLength={36}
                />

            <Text style={{fontSize: 16, marginBottom: 5, marginTop: 20}}>Age</Text>
            <EditText 
                style={{marginTop: 20}}
                placeholder={params.age.toString()}
                onChangeText={handleAge}
                maxLength={3}
                />

            <Text style={{fontSize: 16, marginBottom: 5, marginTop: 20}}>Course</Text>
            <EditText 
                style={{marginTop: 20}}
                placeholder={params.course}
                onChangeText={handleCourse}
                keyboardType="default"
                maxLength={36}
                />
        
            <ContentButton>
                <Button title="Submit" handle={updateStudent} />
            </ContentButton>
          
        </Content>
    )
}

export default Edit