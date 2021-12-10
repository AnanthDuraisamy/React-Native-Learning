import React, { Component , useEffect, useState} from "react";
import { Text, StyleSheet,View, TextInput, Button, Alert } from "react-native";
import { transformFileAsync } from "@babel/core";
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyle from "../Utils/GlobalStyle";


const Welcome = () => {

    const [name, setName] = useState('')

    useEffect(() => {
        getData();
    }, [])
    

    const getData = async () => {

        try{
          const value = await AsyncStorage.getItem('UserName')
          if(value !== null){
              setName(value)
          }
        }
        catch(error){
            Alert.alert('Warning !', console.log.error())
        }
    }

    const setData = async () => {

        try{
            if(name.length == 0){
                Alert.alert('Warning !', 'Please enter your data')
            }
            else{
                await AsyncStorage.setItem('UserName', name)

                Alert.alert('Data Updated')
            }
        }
        catch(error){
            Alert.alert('Warning !', console.log.error())
        }
    }

    const removeData = async () => {
       await AsyncStorage.removeItem('UserName')
       setName('')
        Alert.alert('Data Removed')
    }

    return (

    <View style = {styles.container}>

        <Text style = {[GlobalStyle.customFontBold, GlobalStyle.customTextStyle]}> 
            Welcome { name } !
        </Text>
                
        <TextInput style = {styles.input}
        underlineColorAndroid = "transparent"
        value = { name}
        placeholder = "Enter your Data"
        placeholderTextColor = "#9a73ef"
        backgroundColor = '#00feef'
        autoCapitalize = "none"
        autoCorrect = "none"
        onChangeText = {(value) => setName(value)}
        />


    <Button 
        onPress = {
            () => setData()
        }
         title = "Update"  
         style = {GlobalStyle.customFontBold}
        />

        <Button 
        onPress = {
            () => removeData()
            //this.props.onPress
        }
         title = "Remove"  
         //color = "red"
         style = {GlobalStyle.customFontBold}
        />
    </View>
    )

}

export default Welcome

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