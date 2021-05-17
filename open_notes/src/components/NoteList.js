import React, { useEffect } from 'react';
import { useOfflineMutation } from 'react-offix-hooks';
import { mutateOptions, subscriptionOptions } from '../helpers';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import { Empty } from './Empty';
import { updateNote, deleteNote } from '../graphql/gql';
import { Note } from './Note';

export const NoteList = ({ notes, subscribeToMore }) => {
  const [editNote] = useOfflineMutation(updateNote, mutateOptions.edit);
  const [deleteNote] = useOfflineMutation(deleteNote, mutateOptions.remove);

  useEffect(() => {
    subscribeToMore(subscriptionOptions.add);
    subscribeToMore(subscriptionOptions.edit);
    subscribeToMore(subscriptionOptions.remove);
  }, []);

  if (notes.length === 0) {
    return <Empty />;
  }

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 4,
      }}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {notes &&
          notes.map(note => {
            return (
              <Note
                note={note}
                editNote={editNote}
                deleteNote={deleteNote}
                subscribeToMore={subscribeToMore}
                key={note._id}
              />
            );
          })}
      </View>
    </View>
  );
};
