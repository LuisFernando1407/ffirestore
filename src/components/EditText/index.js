import React from 'react'
import { View, Input } from './style'

export default class EditText extends React.Component {

    render() {
        return (
            <View>
                <Input
                    underlineColorAndroid = "transparent"
                    placeholder = {this.props.placeholder}
                    placeholderTextColor = "#000"
                    autoCapitalize = "none"
                    keyboardType = {this.props.keyboardType ?? "numeric"}
                    numberOfLines = {1}
                    onChangeText = {this.props.onChangeText}
                    maxLength = {this.props.maxLength ?? 4}
                />
            </View>
        )
    }
}