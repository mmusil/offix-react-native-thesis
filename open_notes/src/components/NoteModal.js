import React from 'react';
import { View, Text, Modal } from 'react-native';
import { Header } from './index';

export const NoteModal = ({ title, subtitle, active, close, Component }) => {
  return (
    <Modal visible={active} onRequestClose={close} animationType="none">
      <View>

        <Component />
      </View>
    </Modal>
  );
};
