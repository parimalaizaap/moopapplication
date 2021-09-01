/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Firebase from './DrawerScreens/AddUpdateOrder';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Firebase);
