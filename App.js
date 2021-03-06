/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component }from 'react';
import Welcome from './src/Screens/Home';
import ScrollViewExample from './src/Screens/ScrollViewExample';
import LoginPage from './src/Screens/Login';
import Networking from './src/Screens/http_example';
import MapView from './src/Screens/MapView';
import GlobalStyle from './src/Utils/GlobalStyle';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from "native-base"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import{
   SafeAreaView, StyleSheet, View, Text, Button, Image, FlatList
} from 'react-native';

const Stack = createNativeStackNavigator();


const App = () => {
   
   return (

   /* 1.React Navigation*/
  // <NativeBaseProvider>
      <NavigationContainer>
         <Stack.Navigator>
             <Stack.Screen name = "Login"
            component = {LoginScreen}
            options = {{title: 'Login'}}/>

            <Stack.Screen name = "Home"
            component = {HomeScreen}
            options = {{ title: 'Home Page'}}/>

            <Stack.Screen name = "API"
            component = {APIScreen}
            options = {{ title: 'API Page'}}/>

            <Stack.Screen name = "Profile"
            component = {ProfileScreen}
            options = {{ title: 'New Profile'}}/> 

            <Stack.Screen name = "Map"
            component = {MapScreen}
            options = {{ title: 'Map Display'}}/>
         </Stack.Navigator>
      </NavigationContainer>
   //</NativeBaseProvider>


      /*Sample FlatList */

      // <View style = {styles.container}>
      //    <FlatList data = {[
      //    {key: 'Devin'},
      //     {key: 'Dan'},
      //     {key: 'Dominic'},
      //     {key: 'Jackson'},
      //     {key: 'James'},
      //     {key: 'Joel'},
      //     {key: 'John'},
      //     {key: 'Jillian'},
      //     {key: 'Jimmy'},
      //     {key: 'Julie'},

      //    ]} renderItem = {({item}) => <Text style = {styles.item}> {item.key} </Text>}/>
      // </View>

   )
}

export default App

const LoginScreen = ({navigation}) => {
   return (
      /* 2.Login sample */
      <SafeAreaView>
            <LoginPage onPress = {() => navigation.navigate('Home')}/>
      </SafeAreaView>

      /* Button */
      // <Button title = "Home"
      // onPress = {() => navigation.navigate('Home')}/>
   )
}

const HomeScreen = ({navigation}) => {
   return (
      /* 3.Async Storage in Welcome/Home Screen */
      <SafeAreaView>
            {/* <View>

               <Cat name = "First Cat"/>
               <Cat name = "Second Cat"/>

               <Networking />
               
            </View> */}

            <Welcome />

            <Button style = {styles.button}
                  title = "Go to Profile"
                  onPress = {() => navigation.navigate('Profile',{ name : 'Ananth'})}
                  />

            <Button style = {styles.button}
                  title = "Go to API"
                  onPress = {() => navigation.navigate('API')}
                  />
      </SafeAreaView>

   )
}

const APIScreen = () => {
   /* 3.API */
         return (
            <View>

               <Cat name = "Movies List and its Release Year"/>

               <Networking />
               
            </View>
         )
}

const ProfileScreen = ({navigation,route}) => {
   //return <Text> This is {route.params.name}'s profile</Text>

   /* 4.Scroll with List */
   return (
      <SafeAreaView>
         <ScrollViewExample onPress = {() => navigation.navigate('Map')}/>
      </SafeAreaView>
   )
}

const MapScreen = ({navigation}) => {
   /* 5.Map View */
   var region = {
      latitude: 37.48,
      longitude: -122.16,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
   };
   return(
         <MapView region = {region} zoomEnabled = {false} onRegionChange = {this.onRegionChange} style={styles.map} />
      )
}

const Cat = (props) => {
   /* 5.Display Image and its Text */
   return (
       <View>
            <Image source = {{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
            style ={{width: 100, height: 100, marginHorizontal: 150}}/>
           <Text style = {[GlobalStyle.customFontItalic,styles.item]}> {props.name} </Text> 
       </View>
   );
}

const styles = StyleSheet.create({
   button: {
      alignContent: 'center',
      justifyContent: 'center',
      flex: 1,
      padding: 20
   },

   map: {
      flex: 2,
      flexDirection: 'row',
   },

   container:{
      flex: 1,
      padding: 10,
   },
   item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },

})