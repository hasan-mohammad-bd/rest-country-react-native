import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Countries from './components/Countries';
import React, {useState, useEffect} from 'react';


export default function App() {
  const [countries, setCountries] = useState([]);
  useEffect(()=> {
    fetch('')
    .then(res => res.json())
    .then(data => setCountries(data));
  },[])
  return (
    <View style={styles.container}>
      <Text>Visiting countries</Text>
      <StatusBar style="auto" />
      <Countries></Countries>
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
