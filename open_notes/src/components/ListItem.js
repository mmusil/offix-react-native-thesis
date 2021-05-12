import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';

export const ListItem = ({ item }) => {
  const [checked, setChecked] = React.useState(item.completed);
  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={checked}
          style={styles.checkbox}
          onValueChange={() => {
            setChecked(!checked);
          }}
        />
        <Text style={styles.label}>{item.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 0,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 5,
  },
});
