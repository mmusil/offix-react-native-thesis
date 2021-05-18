/**
 * @author Marek Musil
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Appbar, useTheme } from 'react-native-paper';
import { useNetworkStatus } from 'react-offix-hooks';

export const Header = ({ isModal, title, cancel, save, isTextType, setType, changeType }) => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  const { colors } = useTheme();

  const isOnline = useNetworkStatus();

  const noteType = isTextType ? 'text' : 'order-bool-ascending-variant';

  if (isModal) {
    return (
      <Appbar.Header theme={{ colors: { primary: 'orange', text: 'white' } }}>
        <Appbar.BackAction color="white" onPress={cancel} />
        <Appbar.Content
          title={title}
          style={styles.header}
          subtitle={isOnline ? 'Online' : 'Offline'}
          subtitleStyle={styles.subtitle}
          color="white"
        />
        <Appbar.Action icon={noteType} color="white" />
        <Appbar.Action icon="check" onPress={save} color="white" />
      </Appbar.Header>
    );
  }

  return (
    // <Appbar.Header style={{ color: colors.secondary }}>
    <Appbar.Header theme={{ colors: { primary: 'orange', text: 'white' } }}>
      {/*<Appbar.BackAction onPress={_goBack} />*/}
      <Appbar.Content
        title="Open Notes"
        style={styles.header}
        subtitle={isOnline ? 'Online' : 'Offline'}
        subtitleStyle={styles.subtitle}
        color="white"
      />
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
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  subtitle: {
    marginHorizontal: 2,
  },
});
