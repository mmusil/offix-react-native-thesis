/**
 * @author Marek Musil
 */

import React from 'react';
import { ActivityIndicator } from 'react-native-paper';

export const Loading = () => {
  return (
    <ActivityIndicator
      animating={true}
      color={'#3d5afe'}
      size={'large'}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
};
