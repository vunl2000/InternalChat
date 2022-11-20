import {colors, fonts} from '@styles';
import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface IErrorMessage {
  msg?: string;
}

export const ErrorMessage: React.FC<IErrorMessage> = ({msg}) => {
  return <Text style={styles.text}>{msg}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.error_text,
    marginTop: 4,
    paddingHorizontal: 24,
    fontFamily: fonts.medium,
  },
});
