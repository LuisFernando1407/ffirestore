import React from 'react'

import { TouchableOpacity } from 'react-native'
import { Title, View } from '../Button/style'

export default class Button extends React.Component {
    render(){
        return (
            <View color={this.props.color || "#0a043c"}>
                <TouchableOpacity style={{ alignSelf: 'stretch', alignItems : 'center'}} onPress={this.props.handle}>
                    <Title>{this.props.title}</Title>
                </TouchableOpacity>
            </View> 
        )
    }
}