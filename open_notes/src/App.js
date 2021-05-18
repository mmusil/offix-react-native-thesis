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

import { useTheme } from 'react-native-paper';
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

const App: () => Node = () => {
  const { loading, error, data, subscribeToMore } = useQuery(findNotes);
  const [useCreateNote] = useOfflineMutation(createNote, mutateOptions.add);
  const [modalActive, setModalActive] = useState(false);

  const isDarkMode = useColorScheme() === 'dark';
  const colorTheme = useColorScheme();
  const { colors } = useTheme();

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

  return (
    <SafeAreaView style={(backgroundStyle, styles.sectionContainer)}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colors.primary_darker}
      />
      <Header title="Open Notes" setType={() => console.log('WTF')} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <View>
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
          <CreateNote createNote={useCreateNote} cancel={toggleModal} />
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
