// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

// import React in our code
import React, {useState, useEffect,Component} from 'react';
       
// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Modal,
  Button,
  Alert,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Example = ({navigation}) => 
{

  header:    // Your custom header
  <View
    style={{
      flexDirection: "row",
      height: 80,
      marginTop: Platform.OS == "ios" ? 20 : 0 // only for IOS to give StatusBar Space
    }}
  >
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text> BACK </Text>
    </TouchableOpacity>
    <Text> My Header </Text>
  </View>;

  return (
    <SafeAreaView style={{flex: 1}}>
     <Text> BACK </Text>
    </SafeAreaView>
  );
};

export default Example;