import { StatusBar } from 'expo-status-bar';
import * as db from './database';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const d = async () => {
    await db.init();
    await db.update(17, { id: 23 }).catch((err) => console.log('error', err));
    db.select()
      .then((res) => console.log('success 22222', res.rows._array))
      .catch((err) => console.log('error', err));
  };

  d();

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
