import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button,TouchableOpacity,Alert,Image ,SafeAreaView} from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  
import {createStackNavigator} from '@react-navigation/stack';  
import {createDrawerNavigator} from 'react-navigation-drawer';

import {  
    createSwitchNavigator,  
    createAppContainer
} from 'react-navigation';  
import SearchableFlatList from './components/SearchableList';

import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import 'react-native-gesture-handler';
// import AsyncStorage
import AsyncStorage from '@react-native-community/async-storage';  



export default class App extends Component {  
    render() {  
        return <AppContainer />;  
    }  
}  
  

class Menus extends Component {  
    static navigationOptions = {  
         title: 'Moop Application',  
    };  
  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>MenuScreen</Text>  
            </View>  
        );  
    }  
}  

class Orders extends Component {  
    static navigationOptions = {  
         title: 'Orders',  
    };  

  
    render() {  
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
}  

class Reports extends Component {  
    static navigationOptions = {  
         title: 'Reports',  
    };  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>ReportsScreen</Text>  
                <Button  
                    title="Go to Menu"  
                    onPress={() => this.props.navigation.navigate('Menus')}  
                />  
            </View>  
        );  
    }  
}  
 
class Employee extends Component {  
    static navigationOptions = {  
         title: 'Employee',  
    };  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>EmployeeScreen</Text>  
                <Button  
                    title="Go to Menu"  
                    onPress={() => this.props.navigation.navigate('Menus')}  
                />  
            </View>  
        );  
    }  
}  
  
class Tables extends Component {  
    static navigationOptions = {  
         title: 'Tables',  
    };  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>TablesScreen</Text>  
                <Button  
                    title="Go to Menu"  
                    onPress={() => this.props.navigation.navigate('Menus')}  
                />  
            </View>  
        );  
    }  
}  

class Transactions extends Component {  
    static navigationOptions = {  
         title: 'Transactions',  
    };  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>TransactionScreen</Text>  
                <Button  
                    title="Go to Menu"  
                    onPress={() => this.props.navigation.navigate('Menus')}  
                />  
            </View>  
        );  
    }  
}  

class Profile extends Component {  
    static navigationOptions = {  
         title: 'Profile',  
    };  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>ProfileScreen</Text>  
                <Button  
                    title="Go to Menu"  
                    onPress={() => this.props.navigation.navigate('Menus')}  
                />  
            </View>  
        );  
    }  
}  

class Logout extends Component {  
    static navigationOptions = {  
         title: 'Logout',  
    };  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>LogoutScreen</Text>  
                <Button  
                    title="Go to Menu"  
                    onPress={() => this.props.navigation.navigate('Menus')}  
                />  
            </View>  
        );  
    }  
}  


const MenuStackNavigator = createStackNavigator(  
    {  
        MenuNavigator: Menu  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
        return {  
            headerLeft: (  
                <Icon  
                    style={{ paddingLeft: 10 }}  
                    onPress={() => navigation.openDrawer()}  
                    name="md-menu"  
                    size={30}  
                />  
            )  
        };  
        }  
    }  
);  
  
const OrdersStackNavigator = createStackNavigator(  
    {  
        OrdersNavigator: Orders 
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerLeft: (  
                    <Icon  
                        style={{ paddingLeft: 10 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="md-menu"  
                        size={30}  
                    />  
                )  ,
                headerRight: () => (
                    <CustomMenu
                      menutext="Menu"
                      menustyle={{marginRight: 14}}
                      textStyle={{color: 'black'}}
                      navigation={navigation}
                      isIcon={true}
                    />
                  ),
            };  
        }  
    }  
);  

const ReportsStackNavigator = createStackNavigator(  
    {  
        ReportsNavigator: Reports 
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerLeft: (  
                    <Icon  
                        style={{ paddingLeft: 10 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="md-menu"  
                        size={30}  
                    />  
                )  
            };  
        }  
    }  
); 

const EmployeeStackNavigator = createStackNavigator(  
    {  
        EmployeeNavigator: Employee 
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerLeft: (  
                    <Icon  
                        style={{ paddingLeft: 10 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="md-menu"  
                        size={30}  
                    />  
                )  
            };  
        }  
    }  
);  

const TablesStackNavigator = createStackNavigator(  
    {  
        TablesNavigator: Tables 
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerLeft: (  
                    <Icon  
                        style={{ paddingLeft: 10 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="md-menu"  
                        size={30}  
                    />  
                )  
            };  
        }  
    }  
);  

const TransactionsStackNavigator = createStackNavigator(  
    {  
        TransactionsNavigator: Transactions 
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerLeft: (  
                    <Icon  
                        style={{ paddingLeft: 10 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="md-menu"  
                        size={30}  
                    />  
                )  
            };  
        }  
    }  
);  

const ProfileStackNavigator = createStackNavigator(  
    {  
        ProfileNavigator: Profile 
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerLeft: (  
                    <Icon  
                        style={{ paddingLeft: 10 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="md-menu"  
                        size={30}  
                    />  
                )  
            };  
        }  
    }  
);  


const LogoutStackNavigator = createStackNavigator(  
    {  
        LogoutNavigator: Logout 
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerLeft: (  
                    <Icon  
                        style={{ paddingLeft: 10 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="md-menu"  
                        size={30}  
                    />  
                )  
            };  
        }  
    }  
);  

const AppDrawerNavigator = createDrawerNavigator({  
    Menu: {  
        screen: MenuStackNavigator  
    },  
    Orders: {  
        screen: OrdersStackNavigator  
    },  
    Reports:{
        screen:ReportsStackNavigator
    },
    Employee:{
        screen:EmployeeStackNavigator
    },
    Tables:{
        screen:TablesStackNavigator
    },
    Transactions:{
        screen:TransactionsStackNavigator
    },
    Profile:{
        screen:ProfileStackNavigator
    },
    Logout:{
        screen:LogoutStackNavigator
    },
});  
  
const AppSwitchNavigator = createSwitchNavigator({  
    Menu: { screen: AppDrawerNavigator },  
    Orders: { screen: Orders},  
    Reports: { screen: Reports}, 
    Employee: { screen: Employee},  
    Tables: { screen: Tables}, 
    Transactions: { screen: Transactions},  
    Profile: { screen: Profile},  
    Logout: { screen: Logout},  
});  

const AppContainer = createAppContainer(AppSwitchNavigator);  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        alignItems: 'center',  
        justifyContent: 'center'  
    }  
});  


const CustomMenu = (props) => {
    let _menu = null;
    return (
      <View style={props.menustyle}>
        <Menu
          ref={(ref) => (_menu = ref)}
          button={
            props.isIcon ? (
              <TouchableOpacity onPress={() => _menu.show()}>
               <Icon  style={{ paddingLeft: 10 }}  name="more-vert"  size={30}  />  
              </TouchableOpacity>
            ) : (
              <Text
                onPress={() => _menu.show()}
                style={{color: 'red'}}>
                {props.menutext}
              </Text>
            )
          }>
          <MenuItem onPress={() => {AsyncStorage.setItem('ordertype', "cmorder");}}>
           Completed Order
          </MenuItem>
  
          <MenuItem >Current Order</MenuItem>
  
          <MenuDivider />
  
          <MenuItem onPress={() => {Alert.alert('PopUp Menu Button Clicked...')}}>
            Accepted Order
          </MenuItem>

          <MenuItem onClick={() => {this._menu.hide()}}>
            Cancel
          </MenuItem>
  
        </Menu>
      </View>
    );
  };