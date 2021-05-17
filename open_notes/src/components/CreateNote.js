import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { Appbar, List } from 'react-native-paper';
import { Header } from './Header';
import { ListItem } from './ListItem';

export const CreateNote = ({ createNote, cancel }) => {
  const [title, setTitle] = useState();
  const [isTextType, setType] = useState(true);
  const [text, setText] = useState();

  const handleSubmit = e => {
    e.preventDefault();

    createNote({
      variables: {
        title,
        type: isTextType ? 'Text' : 'List',
        text,
        version: 1,
        completed: false,
      },
    })
      .then(cancel)
      .catch(handleError);
  };

  const changeType = () => {
    setType(!isTextType);
    console.log(isTextType);
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

  if (isTextType) {
    return (
      <View>
        <Header
          isModal={true}
          title="Create a Note"
          cancel={cancel}
          save={handleSubmit}
          isTextType={isTextType}
        />
        <Button
          onPress={() => {
            setType(!isTextType);
            console.log(isTextType);
          }}
          title="Change note type"
          color="#3d5afe"
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
  } else {
    return (
      <View>
        <Header
          isModal={true}
          title="Create a Note"
          cancel={cancel}
          save={handleSubmit}
          isTextType={isTextType}
        />
        <Button
          onPress={() => {
            setType(!isTextType);
            console.log(isTextType);
          }}
          title="Change note type"
          color="#3d5afe"
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
          <View>
            <ListItem item={{}} edit={true} />
          </View>

        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    flexDirection: 'column',
  },
});
