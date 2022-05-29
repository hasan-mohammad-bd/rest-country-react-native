import { View, Text, ScrollView } from "react-native";
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
      <Text>Visiting countries: {countries.length}</Text>
      <ScrollView>
          {
              countries.map(country => <SingleCountry country={country} key={country.id}></SingleCountry>)
          }
      </ScrollView>
    </View>
  );
}
