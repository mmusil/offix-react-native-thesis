import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Appbar, useTheme } from 'react-native-paper';

export const Header = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  const { colors } = useTheme();

  return (
    // <Appbar.Header style={{ color: colors.secondary }}>
    <Appbar.Header theme={{ colors: { primary: 'orange', text: 'white' } }}>
      {/*<Appbar.BackAction onPress={_goBack} />*/}
      <Appbar.Content title="Open Notes" color="white" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} color="white" />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} color="white" />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    color: '#FFF',
  },
});
