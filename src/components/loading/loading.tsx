import {colors, fonts} from '@styles';
import React from 'react';
import {ActivityIndicator, Modal, StyleSheet, Text, View} from 'react-native';

export const Loading: React.FC = () => {
  return (
    <Modal transparent statusBarTranslucent animationType="fade">
      <View style={styles.container}>
        <View style={styles.content}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={styles.text}>Loading ...</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backdrop,
    zIndex: 1,
  },
  text: {
    fontFamily: fonts.medium,
    marginTop: 8,
  },
  content: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: colors.white,
  },
});
