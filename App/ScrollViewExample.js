import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

class ScrollViewExample extends Component {
   state = {
      names: [
         {'name': 'Jana', 'id': 1},
         {'name': 'Vivek', 'id': 2},
         {'name': 'Kumar', 'id': 3},
         {'name': 'Kupendiran', 'id': 4},
         {'name': 'Yokesh', 'id': 5},
         {'name': 'Anbarasan', 'id': 6},
         {'name': 'Vinoth Krishnan', 'id': 7},
         {'name': 'Manoj Kumar', 'id': 8},
         {'name': 'Ananth', 'id': 9},
         {'name': 'Karthikeyan', 'id': 10},
         {'name': 'Dilipan', 'id': 11},
         {'name': 'Rajesh Pradeep', 'id': 12}
      ]
   }
   render() {
      return (
         <View>
            <ScrollView>
               {
                  this.state.names.map((item, index) => (
                     <View key = {item.id} style = {styles.item}>
                        <TouchableOpacity onPress = {this.props.onPress}>
                        <Text style = {styles.itemText}>{item.name}</Text>
                        </TouchableOpacity>
                     </View>
                  ))
               }
            </ScrollView>
         </View>
      )
   }
}
export default ScrollViewExample

const styles = StyleSheet.create ({
   item: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#d2f7f1'
   },
   itemText: {
      fontFamily: 'PTSerif-Italic'
   },
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#d2f7f1'
   }
})
