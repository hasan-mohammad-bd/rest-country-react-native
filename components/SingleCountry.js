import { View, Text } from 'react-native'
import React from 'react'

export default function SingleCountry({country}) {
  return (
    <View>
      <Text>Country: {country.name.common}</Text>
    </View>
  )
}