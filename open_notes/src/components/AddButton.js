import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FAB } from 'react-native-paper';

export const AddButton = ({ onPress }) => {
  return (
    <FAB
      icon="plus"
      onPress={onPress}
      testID="addButton"
      style={styles.fab}
      theme={{ roundness: 300, colors: { accent: '#3d5afe' } }}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
