/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import Login from './src/pages/login/Index';
import Account from './src/pages/account/Index';
import {name as appName} from './app.json';

import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => Account);
