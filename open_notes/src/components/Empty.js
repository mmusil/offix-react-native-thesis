/**
 * @author Marek Musil
 */

import React from 'react';
import { View, Text } from 'react-native';

export const Empty = () => {
  return (
    <View>
      <Text>You do not have any notes</Text>
      <Text>Click the button to create a new note</Text>
    </View>
  );
};
