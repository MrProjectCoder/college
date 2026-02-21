import React from 'react';
import { View, Text } from 'react-native';

export default function ResultScreen({ route }) {
  const { response } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, textAlign: 'center' }}>
        Verification Result
      </Text>
      <Text style={{ fontSize: 18, marginTop: 20 }}>
        {response ? response.status : 'No Result'}
      </Text>
      <Text style={{ marginTop: 10 }}>Confidence: {response.confidence}</Text>
    </View>
  );
}
