import React from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Title>
        Try editing me! 🎉
      </Title>
    </View>
  );
}