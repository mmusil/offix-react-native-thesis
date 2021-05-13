import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Header } from './Header';

export const CreateNote = ({ createNote, cancel }) => {
  const [title, setTitle] = useState();
  const [type, setType] = useState('Text');
  const [text, setText] = useState();

  const handleSubmit = e => {
    e.preventDefault();

    createNote({
      variables: {
        title,
        type,
        text,
        version: 1,
        completed: false,
      },
    })
      .then(cancel)
      .catch(handleError);
  };

  const handleError = error => {
    error.preventDefault();
    // if (error.offline) {
    //   error.watchOfflineChange();
    // } else {
    //   console.log(error);
    // }
    console.log(error);
    cancel();
  };

  return (
    <View>
      <Header
        isModal={true}
        title="Create a Note"
        cancel={cancel}
        save={handleSubmit}
      />
      <View style={styles.container}>
        <TextInput
          type="text"
          name="title"
          placeholder="Title"
          onChangeText={content => setTitle(content)}
          value={title}
          style={{ fontSize: 24, fontWeight: 'bold' }}
        />
        <TextInput
          name="text"
          placeholder="Text"
          multiline
          onChangeText={content => {
            console.log(content);
            setText(content);
          }}
          value={text}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    flexDirection: 'column',
  },
});
