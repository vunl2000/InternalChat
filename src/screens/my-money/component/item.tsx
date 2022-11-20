import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, fonts, fontSizes} from '@styles';

interface ItemProps {
  onPress?: () => void;
  label: string;
  leftComponent?: any;
}
export const Item: React.FC<ItemProps> = ({onPress, label, leftComponent}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {leftComponent && leftComponent()}
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          flex: 1,
        }}>
        <Text style={styles.label}>{label}</Text>
        <Icon
          name={'chevron-forward-outline'}
          size={20}
          color={colors.secondary_text}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    height: 55,
    borderColor: colors.foreground,
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 10,
  },
  label: {
    fontFamily: fonts.bold,
    color: colors.primary_text,
    marginLeft: 8,
  },
});
