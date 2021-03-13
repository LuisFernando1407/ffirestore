import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Text, TouchableOpacity } from 'react-native'
import firestore from '@react-native-firebase/firestore'

import { View, Divider, Content, ContentButton } from '../Home/style'
import Button from '../../components/Button'

const Home = ({ navigation }) => {
    const { width } = Dimensions.get('window')
    const [students, setStudents] = useState([])

    useEffect(() => {
        firestore()
        .collection("students")
        .get()
        .then(snapshot => {
            const stds = []

            snapshot.forEach((document, index) => {
                stds[index] = {
                    id: document.id,
                    ...document.data()
                }
            })

            setStudents(stds)
        }).catch(error => console.log(error))
    }, [students])

    const showDetails = (item) => {
        navigation.navigate('DetailsScreen', item)
    }

    return (
        <View width={(width - 40)}>
            <FlatList
                data={students}
                renderItem={
                    ({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => showDetails(item)}>
                                <Content>
                                    <Text>{item.name}</Text>
                                    <Divider/>
                                </Content>
                            </TouchableOpacity>
                        )
                    }
                }
                keyExtractor={
                    (index, item) => index + item
                }
            />

            <ContentButton>
                <Button title="Register" handle={() => navigation.navigate('RegisterScreen')} />
            </ContentButton>
                
        </View>
    )}

export default Home