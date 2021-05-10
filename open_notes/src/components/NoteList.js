import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import { Empty } from './Empty';

export const NoteList = ({ notes, subscribeToMore }) => {
  if (notes.length === 0) return <Empty />;
  return (
    <SafeAreaView>

    </SafeAreaView>
  );
};
