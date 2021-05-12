import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, Title, useTheme } from 'react-native-paper';
import { ListItem } from './ListItem';

export const Note = ({ note, editNote, deleteNote }) => {
  const { colors } = useTheme();

  if (note.type === 'Text') {
    return (
      <View style={styles.note}>
        <Title numberOfLines={1} style={styles.title}>{note.title}</Title>
        <Text
          numberOfLines={4}
          style={(styles.content, { paddingHorizontal: 5 })}>
          {note.text}
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.note}>
      <List.Section>
        <Title numberOfLines={1} style={styles.title}>{note.title}</Title>
        {note.list &&
          note.list.map(item => {
            return <ListItem item={item} key={item._id} />;
          })}
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  note: {
    marginHorizontal: 8,
    marginVertical: 5,
    flex: 4,
    minWidth: '40%',
    maxWidth: '46%',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C2C2C2',
    paddingBottom: 5,
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
