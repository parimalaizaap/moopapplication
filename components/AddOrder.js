import React, { Component } from 'react';
import { Text,SafeAreaView,TextInput,Button, FlatList,TouchableOpacity, StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Modal from 'react-native-modal'; // 2.4.0
import Icon from 'react-native-vector-icons/Ionicons';

export default class AddOrder extends Component { 
 
  constructor(props) {
    super(props);
  
      this.state = {
        FlatListItems: [{name:'item 1:100$'},{name:'item 2:100$'},{name:'item 3:300$'},{name:'item 4:400$'},{name:'item 5:120$'},{name:'item 6:170$'}],
        };
  }
  render() {
    
    return (
    
      <View style={{ flex: 0.9}}>  
    
      <View > 
      <Text style={{fontSize : 30,textAlign:'center',marginTop:20,marginBottom:20}}>ORDER</Text>  
      </View>
      
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flex: 1, paddingLeft: 10 }}>
          <Text style={{ fontSize: 25, color: 'black', fontWeight: '200' }}>Table No:</Text>
        </View>
        <View style={{ flex: 1, paddingRight: 10 }}>
          <TextInput  style={styles.textInput_Style}></TextInput>
        </View>
        <View
          style={{ flex: 1, paddingRight: 10 }}>
        </View>
      </View>

      <View style={{ flex: 1, flexDirection: 'row',marginTop:50, justifyContent: 'space-between' }}>
        <View style={{ flex: 1, paddingLeft: 10 }}>
          <Text style={{ fontSize: 25, color: 'black', fontWeight: '200' }}>Status:</Text>
        </View>
        <View style={{ flex: 1, paddingRight: 10 }}>
          <TextInput  style={styles.textInput_Style}></TextInput>
        </View>
        <View
          style={{ flex: 1, paddingRight: 10 }}>
        </View>
      </View>

      <View > 
      <Text style={{fontSize : 30,textAlign:'center',marginTop:40,marginBottom:20}}>Special Instruction</Text>  
      <View style={{ flex: 1, paddingRight: 10 }}>
          <TextInput  style={styles.textInput_Style}></TextInput>
        </View>
      </View> 
      <View >
      <View style={styles.screenContainer}>
      <Button title="Add item" />
       </View> 
      </View>

      <FlatList
       style={{marginTop:20}}
       data={this.state.FlatListItems}
        renderItem={({item})=>(
      <View style={{justifyContent:'center',marginBottom:10}}>
      <Text style={{backgroundColor:'blue',color:'white',padding:10,width:120}}>
      {item.name}
       </Text>
      </View>
       )}
      />


      <View style={styles.screenContainer}>
      <Button title="Add/Update" />
       </View> 
      
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenContainer: {
    justifyContent: "center",
    padding: 16,
    marginTop:40
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  textInput_Style:
  {
    width: '90%',
    height: 42,
    borderColor: '#009688',
    borderWidth: 1,
    backgroundColor: '#fff',
    textAlign:'center'
  },

 

});