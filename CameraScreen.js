import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted')
    })();
  }, []);

  if (hasPermission == null){
    return <Text> Requesting camera permission... </Text>
  }

  else  {
    return <Text> No access to camera</Text>
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        ref={(ref) => setCameraRef(ref)}
      />

      <TouchableOpacity
        style={styles.captureButton}
        onPress={async () => {
          if (cameraRef) {
            const photo = await cameraRef.takePictureAsync();

            // SEND PHOTO TO ANOTHER SCREEN
            navigation.navigate("Result", { photo });
          }
        }}
      >
        <Text style={{ color: '#e11616' }}>Capture</Text>
      </TouchableOpacity>
    </View>

  );
}