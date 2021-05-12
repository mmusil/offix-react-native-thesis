import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

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
    // if (error.offline) {
    //   error.watchOfflineChange();
    // } else {
    //   console.log(error);
    // }
    console.log(error);
    cancel();
  };

  return (
    <View style={styles.container}>
      <TextInput
        type="text"
        name="title"
        placeholder="Title"
        onChangeText={content => setTitle(content)}
        value={title}
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
      <Button title="Close" onPress={cancel} />
      {/* <i className="icon icon-cross" /> */}
      <Button title="Submit" onPress={handleSubmit} />
      {/* <i className="icon icon-check" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    alignItems: 'flex-start',
  },
});
