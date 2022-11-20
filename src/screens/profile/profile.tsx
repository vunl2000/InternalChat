import {Icon} from '@components';
import {SCREENS} from '@constants';
import {showNotice} from '@helpers';
import {useLoading} from '@hooks';
import {useNavigation} from '@react-navigation/native';
import {removeUserInfo, RootState} from '@redux';
import {colors} from '@styles';
import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

import {IconProps} from '@components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {Item} from './component/item';
import {styles} from './styles';

interface ListItemDataProps {
  icon: IconProps;
  label: string;
  onPress?: () => void;
}

export const Profile: React.FC = () => {
  const navigation = useNavigation<any>();
  const {showLoading, hideLoading} = useLoading();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.userInfo);

  const LIST_ITEM_DATA: ListItemDataProps[] = [
    {
      icon: {
        name: 'wallet-outline',
        color: colors.white,
        size: 20,
        type: 'ionicon',
      },
      label: 'Túi tiền của tôi',
      onPress: () => {
        navigation.navigate(SCREENS.MY_MONEY);
      },
    },
    {
      icon: {
        name: 'person-outline',
        color: colors.white,
        size: 20,
        type: 'ionicon',
      },
      label: 'Túi tiền cá nhân',
      onPress: () => {},
    },
    {
      icon: {
        name: 'ios-share-social-outline',
        color: colors.white,
        size: 20,
        type: 'ionicon',
      },
      label: 'Chia sẻ có thưởng',
    },
    {
      icon: {
        name: 'settings-outline',
        color: colors.white,
        size: 20,
        type: 'ionicon',
      },
      label: 'Công năng thiết lập',
    },
    {
      icon: {
        name: 'log-out-outline',
        color: colors.white,
        size: 20,
        type: 'ionicon',
      },
      label: 'Đăng xuất',
      onPress: () => {
        showLoading();
        // auth()
        //   .signOut()
        //   .then(() => {
        //     dispatch(removeUserInfo());
        //     navigation.reset({
        //       index: 0,
        //       routes: [{name: SCREENS.SIGN_IN}],
        //     });
        //   })
        //   .catch(error => {
        //     showNotice(error.messages, 'danger');
        //   });

        hideLoading();
      },
    },
  ];

  const onEdit = () => {
    navigation.navigate(SCREENS.EDIT_INFOR);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imgCover}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0DEU5fSNCUaxULIWtp6vevUd69Jsn2V2qxqqEqbfc5ZMxr5gsDlTWP2GMFMtaPDjV1Y4&usqp=CAU',
        }}
      />
      <TouchableOpacity style={styles.iconScan}>
        <MaterialCommunityIcons
          name={'line-scan'}
          size={25}
          color={colors.white}
        />
      </TouchableOpacity>

      <View style={styles.viewInfo}>
        <Image
          source={{
            uri: user?.photoUrl ? user.photoUrl : undefined,
          }}
          style={styles.avatar}
        />
        <TouchableOpacity onPress={onEdit} style={styles.wrapInfo}>
          <View style={{flex: 1}}>
            <Text numberOfLines={1} style={styles.name}>
              {user?.fullName}
            </Text>
            <Text numberOfLines={1} style={styles.email}>
              Mã số: {user?.code}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Icon
              type={'ionicon'}
              name={'qr-code-outline'}
              size={20}
              color={colors.secondary_text}
            />
            <Icon
              type={'ionicon'}
              name={'chevron-forward-outline'}
              size={20}
              color={colors.secondary_text}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: 'white',
          marginTop: 8,
          paddingLeft: 20,
          paddingRight: 16,
        }}>
        <FlatList
          data={LIST_ITEM_DATA}
          renderItem={({item, index}) => {
            return (
              <Item
                leftComponent={() => {
                  return (
                    <Icon
                      type={'ionicon'}
                      name={item.icon.name}
                      size={20}
                      color={colors.primary_text}
                    />
                  );
                }}
                label={item.label}
                onPress={item.onPress}
              />
            );
          }}
        />
      </View>
    </View>
  );
};
