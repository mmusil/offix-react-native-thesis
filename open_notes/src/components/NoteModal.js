import React from 'react';
import { View, Text, Modal } from 'react-native';
import { Header } from './index';

export const NoteModal = ({ title, subtitle, active, close, Component }) => {
  return (
    <Modal visible={active} onRequestClose={close} animationType="none">
      <View>
        <Header isModal={true} title={title} cancel={close} />
        <View>
          
        </View>
        <Component />
      </View>
    </Modal>
  );
};