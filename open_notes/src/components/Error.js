import React from 'react';
import { View, Text } from 'react-native';

export const Error = () => {
  return (
    <View>
      {/* <div className="empty-icon"><i className="icon icon-3x icon-flag" /></div> */}
      <Text>There was an error</Text>
      <Text>Try reopening the app.</Text>
    </View>
  );
};
