import {View, Text, ViewStyle} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {colors, fonts} from '@styles';
import {StyleProp} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {HEIGHT_INPUT, RADIUS_INPUT} from '@constants';

interface IButton {
  title?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const Button: React.FC<IButton> = ({title, style, onPress}) => {
  return (
    <View style={style}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: HEIGHT_INPUT,
    backgroundColor: colors.primary,
    borderRadius: RADIUS_INPUT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: fonts.medium,
    color: colors.white,
  },
});
