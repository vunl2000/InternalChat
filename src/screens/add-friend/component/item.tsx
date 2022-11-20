import {BASE_PADDING} from '@constants';
import {colors, fonts} from '@styles';
import {User} from '@types';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface ItemProps {
  data: User;
  onPress: () => void;
}

const AVATAR_WIDTH = 50;

export const Item: React.FC<ItemProps> = ({data, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperContent}>
        <Image source={{uri: data?.photoUrl}} style={styles.avatar} />
        <Text style={styles.fullName}>{data?.fullName}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}>
        <Text style={styles.action}>Kết bạn</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 4,
    alignItems: 'center',
    paddingHorizontal: BASE_PADDING,
  },
  wrapperContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: AVATAR_WIDTH,
    height: AVATAR_WIDTH,
    borderRadius: AVATAR_WIDTH / 2,
    backgroundColor: colors.foreground,
  },
  fullName: {
    color: colors.primary_text,
    fontFamily: fonts.medium,
    marginHorizontal: 8,
  },
  action: {
    backgroundColor: `${colors.primary}`,
    padding: 10,
    color: colors.white,
    textAlign: 'center',
    fontFamily: fonts.medium,
  },
});
