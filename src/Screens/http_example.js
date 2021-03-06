import React, { Component } from "react";
import { Text, View, ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { create } from "react-test-renderer";
import GlobalStyle from "../Utils/GlobalStyle";


class Networking extends Component {

    constructor (props) {
        super (props);

        this.state = {
            data: [],
            isloading: true
        }
    }

    async getMovies () {
        try {
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();
            this.setState({ data: json.movies});
        }
        catch(error){
            console.log(error);
        }
        finally{
            this.setState({isloading: false})
        }
    }

    componentDidMount(){
        this.getMovies();
    }

    render () {
        const {data, isloading} = this.state;
        return (
            <View style = {styles.container}>
            {
                isloading ? <ActivityIndicator/> :(
                    <FlatList data = {data}
                    keyExtractor = {({id},index) => id}
                    renderItem = {({item}) => (
                        <Text style = {[GlobalStyle.customFontBold,styles.item]}>{item.title} {item.releaseYear} </Text>
                    )}/>
                )
            }
         </View>
        );
    }
}


export default Networking

const styles = StyleSheet.create ({
    container: {
        //flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d2f7f1'
     },
     item: {
        fontSize: 30,
        padding: 10
     }
})