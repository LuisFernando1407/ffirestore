import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import { Dimensions, Text, View, Alert, Modal, TouchableHighlight } from 'react-native'

import { Content, ContentButton, Styles } from '../Details/style'
import Button from '../../components/Button'

const Details = ( { navigation } ) => {
    const { width } = Dimensions.get('window')
    const { params } = navigation.state 
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        navigation.setParams({title: params.name, iconBack: true})
    }, [])

    const deleteStudent = () => {
        firestore()
        .collection("students")
        .doc(params.id)
        .delete()
        .then(() => {
            setModalVisible(!modalVisible);
            navigation.goBack()
        }).catch((error) => console.log(error))
    }

    return (
        <Content width={(width - 40)}>
             <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}>

                <View style={Styles.centeredView}>
                <View style={Styles.modalView}>
                    <Text style={Styles.modalTitle}>Attention!</Text>

                    <Text style={Styles.modalText}>Do you really want to delete the user {params.name}?</Text>

                    <TouchableHighlight    
                        style={{ ...Styles.openButton, backgroundColor: "#ff0000" }}
                        onPress={deleteStudent}>
                        <Text style={Styles.textStyle}>Delete</Text>
                    </TouchableHighlight>
                    </View>
                </View>
            </Modal>          

            <Text>Course: {params.course}</Text>
            <Text>Age: {params.age}</Text>

            <ContentButton>
                <Button title="Edit" handle={() => navigation.navigate('EditScreen', params)} />
                
                <Button color="#ff0000" title="Delete" handle={() => setModalVisible(true)} />
            </ContentButton>
          
        </Content>
    )
}

export default Details