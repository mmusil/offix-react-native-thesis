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
import {
  AddButton,
  CreateNote,
  Error,
  Header,
  Loading,
  NoteList,
  NoteModal,
} from './components';

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
  const colorTheme = useColorScheme();

  const isOnline = useNetworkStatus();

  const toggleModal = () => {
    setModalActive(!modalActive);
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  // data.findNotes.items[3] = JSON.parse(JSON.stringify(data.findNotes.items[2]));
  // data.findNotes.items[3]._id = "609a69977c0933406db328ad";
  //
  // data.findNotes.items[4] = JSON.parse(JSON.stringify(data.findNotes.items[2]));
  // data.findNotes.items[4]._id = "609a2fdb7c0933406db328cc";
  //
  // data.findNotes.items[5] = JSON.parse(JSON.stringify(data.findNotes.items[2]));
  // data.findNotes.items[5]._id = "609a2fdb7c0933406db328dd";
  // data.findNotes.items[5].text =
  //   'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam commodo dui eget wisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer in sapien. Sed convallis magna eu sem. Nullam rhoncus aliquam metus. Donec vitae arcu. ';
  //
  // data.findNotes.items[6] = JSON.parse(JSON.stringify(data.findNotes.items[2]));
  // data.findNotes.items[6]._id = "609a2fdb7c0933406db328bc";

  return (
    <SafeAreaView style={(backgroundStyle, styles.sectionContainer)}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header title="Open Notes"/>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
        // style={{
        //   backgroundColor: isDarkMode ? Colors.black : Colors.white,
        // }}
        >
          <View>
            <Text>Network status: {isOnline ? 'Online' : 'Offline'}</Text>
            <NoteList
              notes={data.findNotes.items}
              subscribeToMore={subscribeToMore}
            />
          </View>
        </View>
      </ScrollView>
      <NoteModal
        title="Create a Note"
        subtitle=""
        active={modalActive}
        close={toggleModal}
        Component={() => (
          <CreateNote createNote={createNote} cancel={toggleModal} />
        )}
      />
      <AddButton onPress={toggleModal} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    paddingHorizontal: 0,
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
