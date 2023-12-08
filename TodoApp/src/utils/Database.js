// src/utils/Database.js
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  { name: 'TodoApp.db', location: 'default' },
  () => {},
  error => {
    console.error('Error opening database', error);
  }
);

const executeSql = (sql, params = []) =>
  new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        sql,
        params,
        (_, { rows }) => resolve(rows),
        (_, error) => reject(error)
      );
    });
  });

export { executeSql };
