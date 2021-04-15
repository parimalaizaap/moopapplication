/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';
import React, { Component } from 'react';  
 import { View, Text, StyleSheet, Button,TouchableOpacity,Alert,Image ,SafeAreaView} from 'react-native';  
 import {NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';
 import {createDrawerNavigator} from '@react-navigation/drawer';
 
 import {drawerItemsMain} from './drawerItemsMain';
 import CustomDrawerContent from './CustomDrawerContent.js';
 import CustomHeader from './CustomHeader';

 import SearchableFlatList from './components/SearchableList'
 

 const Stack = createStackNavigator();
 const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

function Categories() {
   navigationOptions = {  
    title: 'Categories',  
    headerStyle: {  
        backgroundColor: '#f4511e',  
    },  
    headerTintColor: '#0ff',  
    headerTitleStyle: {  
        fontWeight: 'bold',  
    },  
};  
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Categories</Text>
    </View>
  );
}

function MenuItem() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>MenuItem</Text>
    </View>
  );
}
function ModifierGroup() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>ModifierGroup</Text>
    </View>
  );
}
function ModifierLabel() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>ModifierLabel</Text>
    </View>
  );
}
function Menu() {
  
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Menu</Text>
    </View>
  );
}
function Orders() {
  return (
    <View style={{ flex: 1}}>  
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
   < SearchableFlatList/>
   </SafeAreaView>
   
    <Button  
        title="Go to Menu"  
        onPress={() => this.props.navigation.navigate('Menu')}  
    />  
</View>  
  );
}
function Reports() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings 2 Screen</Text>
    </View>
  );
}
function Employee() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings 2 Screen</Text>
    </View>
  );
}

function Tables() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings 2 Screen</Text>
    </View>
  );
}
function Transactions() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings 2 Screen</Text>
    </View>
  );
}
function Profile() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings 2 Screen</Text>
    </View>
  );
}
function MainDrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => (
        <CustomDrawerContent drawerItems={drawerItemsMain} {...props} />
      )}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Categories" component={Categories} />
      <Drawer.Screen name="MenuItem" component={MenuItem} />
      <Drawer.Screen name="ModifierGroup" component={ModifierGroup} />
      <Drawer.Screen name="ModifierLabel" component={ModifierLabel} />
      <Drawer.Screen name="Menu" component={Menu} title="Menu" />
      <Drawer.Screen name="Orders" component={Orders} />
      <Drawer.Screen name="Reports" component={Reports} />
      <Drawer.Screen name="Employee" component={Employee} />
      <Drawer.Screen name="Tables" component={Tables} />
      <Drawer.Screen name="Transactions" component={Transactions} />
      <Drawer.Screen name="Profile" component={Profile} />
      
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({});
 export default class App extends Component {  
    render() {  
        return (
          <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerMode: 'screen',
              headerTintColor: '#404554',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              header: (props) => {
                return <CustomHeader {...props} />;
              },
            }}>
            <Stack.Screen name="MainDrawer" component={MainDrawerNavigation} />
          </Stack.Navigator>
        </NavigationContainer>
          );
    }  
}  


 