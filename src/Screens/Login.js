import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native'
import GlobalStyle from '../Utils/GlobalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

class LoginPage extends Component {

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

    setData = async (email) => {

        try{
            if(email.length == 0){
                Alert.alert('Warning !', 'Please enter your data')
            }
            else{
                 AsyncStorage.setItem('UserName', email)

                Alert.alert('Data Updated')
            }
        }
        catch(error){
            Alert.alert('Warning !', console.log.error())
        }
    }

    render() {
        return (
            <View style = {styles.container}>

                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Email"
                placeholderTextColor = "#9a73ef"
                backgroundColor = '#00feef'
                autoCapitalize = "none"
                autoCorrect = "none"
                onChangeText = {this.handleEmail}
                />

                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Password"
                placeholderTextColor = "#9a73ef"
                backgroundColor = '#00feef'
                autoCapitalize = "none"
                autoCorrect = "none"
                secureTextEntry = 'true'
                onChangeText = {this.handlePassword}
                />

            <Button 
                onPress = {
                    () => this.setData(this.state.email)
                }
                 title = "Save"  
                 style = {GlobalStyle.customFontBold}
                />

                <Button 
                onPress = {
                    //() => this.login(this.state.email,this.state.password)
                    this.props.onPress
                }
                 title = "Submit"  
                 //color = "red"
                 style = {GlobalStyle.customFontBold}
                />
            </View>
        )
    }
}

export default LoginPage

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