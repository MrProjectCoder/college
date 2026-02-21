import React, { useState } from 'react';
import { View, Button, Image, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { uploadImage } from '../utils/api';

export default function UploadScreen({ navigation, route }) {
  const { email } = route.params;
  const [imageURI, setImageURI] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      setImageURI(result.uri);
    }
  };

  const sendToAPI = async () => {
    if (!imageURI) return alert('Select an image first');

    const response = await uploadImage(imageURI);
    navigation.navigate('Result', { response });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Upload an Image</Text>
      {imageURI && (
        <Image
          source={{ uri: imageURI }}
          style={{ width: 250, height: 250, marginVertical: 10 }}
        />
      )}
      <Button title="Pick Image" onPress={pickImage} />
      <Button title="Check Fake/Real" onPress={sendToAPI} />
    </View>
  );
}
