import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { List } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';

export const ListItem = ({ item, edit }) => {
  const [checked, setChecked] = React.useState(item.completed);
  const [label, setLabel] = React.useState(item.text);
  if (!edit) {
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
  }
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
        <TextInput
          style={styles.label}
          name="label"
          placeholder="Text"
          onChangeText={content => {
            console.log(content);
            setLabel(content);
          }}
          value={label}>
          {item.text}
        </TextInput>
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
