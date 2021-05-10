import React, { useState } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { useQuery } from '@apollo/react-hooks';
import { useOfflineMutation, useNetworkStatus } from 'react-offix-hooks';
import { findNotes, createNote } from './graphql/gql';
import { mutateOptions } from './helpers';
import { Error, Header, NoteList } from './components';

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const { loading, error, data, subscribeToMore } = useQuery(findNotes);
  const [createNote] = useOfflineMutation(createNote, mutateOptions.add);
  const [modalActive, setModalActive] = useState(false);

  const isDarkMode = useColorScheme() === 'dark';

  const isOnline = useNetworkStatus();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  if (error) {
    return <Error error={error} />;
  }

  //if (loading) return <ActivityIndicator
  //         animating={true}
  //         color={'#3d5afe'}
  //         size={'large'}
  //         style={{
  //           position: 'absolute',
  //           left: 0,
  //           right: 0,
  //           top: 0,
  //           bottom: 0,
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //         }}
  //       />;

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        />
        <View>
          <Text>OFFIX TODO React</Text>
          <Text>A simple todo app using offix and graphback</Text>
          <Text>Network status: {isOnline ? 'Online' : 'Offline'}</Text>
        </View>
        {/*<NoteList notes={data.findNotes} subscribeToMore={subscribeToMore} />*/}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
