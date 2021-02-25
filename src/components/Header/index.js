import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

import { Title, View, Icon } from './style'
import SafeAreaView from 'react-native-safe-area-view'

export default class Header extends React.Component {
    render(){
        return (
            <SafeAreaView>
                <View >
                    { this.props.iconBackIsVisible &&
                        <Icon>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Image style={{width: 27, height: 27, tintColor: '#fff', left: 2, position: 'absolute'}} source={require('../../../assets/arrow_back.png')} />
                            </TouchableOpacity>
                        </Icon>
                    }
                    <Title>{this.props.title}</Title>
                </View>
            </SafeAreaView>
        )
    }
}