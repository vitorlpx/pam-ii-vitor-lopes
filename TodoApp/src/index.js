// src/index.js
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { executeSql } from './src/utils/Database';

executeSql(
  'CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT)',
  []
).then(() => {
  AppRegistry.registerComponent(appName, () => App);
});
