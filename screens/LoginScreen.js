import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const doLogin = () => {
    // For now, we are demoing login locally.
    // Later you’ll integrate Firebase or backend auth API.
    if (email && password) {
      navigation.navigate('Upload', { email });
    } else {
      alert('Enter valid credentials');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, textAlign: 'center' }}>Login</Text>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
      />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
      />
      <Button title="Login" onPress={doLogin} />
    </View>
  );
}
