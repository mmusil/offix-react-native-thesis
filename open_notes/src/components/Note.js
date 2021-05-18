/**
 * @author Marek Musil
 */

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { List, Title, useTheme } from 'react-native-paper';
import { ListItem } from './ListItem';

export const Note = ({ note, editNote, deleteNote }) => {
  const { colors } = useTheme();



  if (note.type === 'Text') {
    return (
      <View style={styles.note}>
        <Title numberOfLines={1} style={styles.title}>
          {note.title}
        </Title>
        <Text
          numberOfLines={4}
          style={(styles.content, { paddingHorizontal: 5 })}>
          {note.text}
        </Text>
      </View>
    );
  }
  return (
    <View numberOfLines={4} style={styles.note}>
      <List.Section numberOfLines={4}>
        <Title numberOfLines={1} style={styles.title}>
          {note.title}
        </Title>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {note.list &&
            note.list.map(item => {
              return <ListItem item={item} key={item._id} />;
            })}
        </ScrollView>
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  note: {
    marginHorizontal: 4,
    marginTop: 8,
    flex: 4,
    minWidth: '42%',
    maxWidth: '48%',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C2C2C2',
    paddingBottom: 5,
    maxHeight: '30%',
  },
  title: {
    fontSize: 16,
    paddingVertical: 3,
    paddingHorizontal: 3,
  },
  content: {
    fontSize: 13,
    paddingBottom: 5,
  },
});
