import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';


export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      // <View>
      //   <View>
      //     <Text>Nama</Text>
      //     <TextInput />
      //   </View>
      //   <View>
      //     <Text>Email</Text>
      //     <TextInput />
      //   </View>
      //   <View>
      //     <Text>Phone</Text>
      //     <TextInput />
      //   </View>
      //   <View>
      //     <Text>Adress</Text>
      //     <TextInput />
      //   </View>
      // </View>
    )
  }
}

const styles = StyleSheet.create({})
