import {BASE_PADDING} from '@constants';
import {colors, fonts} from '@styles';
import {User} from '@types';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';

interface ItemProps {
  data: User;
  onPress: () => void;
}

const AVATAR_WIDTH = 50;

export const ItemFriend: React.FC<ItemProps> = ({data, onPress}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.wrapperContent}>
          <Image source={{uri: data?.photoUrl}} style={styles.avatar} />
          <Text numberOfLines={1} style={styles.fullName}>
            {data?.fullName}
          </Text>
        </View>
      </TouchableOpacity>
    </>
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
    backgroundColor: colors.page_background,
  },
  fullName: {
    color: colors.primary_text,
    fontFamily: fonts.medium,
    marginHorizontal: 8,
    marginBottom: 4,
    flex: 1,
  },
});
