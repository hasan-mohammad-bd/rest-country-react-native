import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, {useState, useEffect}  from "react";
import SingleCountry from "./SingleCountry";


export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <View>
      <Text style={styles.header}>Visiting countries: {countries.length}</Text>
      <ScrollView>
          {
              countries.map(country => <SingleCountry country={country} key={country.id}></SingleCountry>)
          }
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
    header: {
        marginTop: 50,
        fontSize: 40,
        color: 'red'
    }
})