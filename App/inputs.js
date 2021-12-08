import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
      }

    handleEmail = (text) => {
        this.setState({ email: text})
    }

    handlePassword = (text) => {
        this.setState({ password: text})
    }

    login = (email, pass) => {
        alert('email:' + email + 'password: ' + pass)
    }

    render() {
        return (
            <View style = {styles.container}>

                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Email"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                autoCorrect = "none"
                onChangeText = {this.handleEmail}
                />

                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Password"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                autoCorrect = "none"
                secureTextEntry = 'true'
                onChangeText = {this.handlePassword}
                />

                <Button 
                onPress = {
                    //() => this.login(this.state.email,this.state.password)
                    this.props.onPress
                }
                 title = "Submit"  
                 color = "red"
                />
            </View>
        )
    }
}

export default Inputs

const styles = StyleSheet.create({
    container: {
        paddingTop: 50
     },
     input: {
        padding:10,
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
     },
     submitButton: {
        backgroundColor: 'green',
        padding: 10,
        margin: 15,
        height: 0,
        borderColor: '#7a42f4',
     },
     submitButtonText:{
        color: 'white'
     }
})