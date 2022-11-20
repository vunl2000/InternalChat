import {Divider, Icon, IconProps, Search} from '@components';
import {COLLECTIONS, SCREENS} from '@constants';
import {useLoading} from '@hooks';
import {useNavigation} from '@react-navigation/native';
import {RootState} from '@redux';
import {colors} from '@styles';
import {User} from '@types';
import React, {useLayoutEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Item} from './component/item';
import {ItemFriend} from './component/item-friend';
import {styles} from './styles';

interface ListItemDataProps {
  icon: IconProps;
  label: string;
  backgroundColor: string;
  onPress?: () => void;
}

export const Contact: React.FC = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const {showLoading, hideLoading} = useLoading();
  const user = useSelector((state: RootState) => state.user.userInfo);
  const [friendList, setFriendList] = useState<Array<User>>([]);

  // useLayoutEffect(() => {
  //   const unsubscribe = firestore()
  //     .collection(COLLECTIONS.USERS)
  //     .onSnapshot(querySnapshot => {
  //       let newFriendList: any = [];
  //       const filter: any = querySnapshot.docs.filter(e => e.id == user.uid);
  //       if (filter.length !== 0) {
  //         let myFriendList: User = filter[0].data();
  //         querySnapshot.docs.map(doc => {
  //           if (myFriendList.friendList.includes(doc.id)) {
  //             newFriendList.push({
  //               uid: doc.id,
  //               ...doc.data(),
  //             });
  //           }
  //           setFriendList([...newFriendList]);
  //         });
  //       } else {
  //         setFriendList([]);
  //       }
  //     });
  //   return () => unsubscribe();
  // }, []);

  const LIST_ITEM_DATA: ListItemDataProps[] = [
    {
      icon: {
        name: 'ios-person-add-outline',
        color: colors.white,
        size: 20,
        type: 'ionicon',
      },
      label: 'Bạn mới',
      backgroundColor: '#61e1b4',
      onPress: () => {
        navigation.navigate(SCREENS.ADD_FRIEND);
      },
    },
    {
      icon: {
        name: 'ios-person-add-outline',
        color: colors.white,
        size: 20,
        type: 'ionicon',
      },
      label: 'Lời mời kết bạn',
      backgroundColor: '#61e1b4',
      onPress: () => {
        navigation.navigate(SCREENS.FRIEND_REQUEST);
      },
    },
    {
      icon: {
        name: 'ios-copy-outline',
        color: colors.white,
        size: 20,
        type: 'ionicon',
      },
      label: 'nhóm chat',
      backgroundColor: '#80e356',
    },
    {
      icon: {
        name: 'pricetags-outline',
        color: colors.white,
        size: 20,
        type: 'ionicon',
      },
      label: 'nhãn mác',
      backgroundColor: '#47bdfb',
    },
    {
      icon: {
        name: 'ios-chatbubbles-outline',
        color: colors.white,
        size: 20,
        type: 'ionicon',
      },
      label: 'gửi vào nhóm',
      backgroundColor: '#8a87f5',
    },
  ];

  const createMessage = () => {};

  return (
    <>
      <View style={styles.container}>
        <View style={styles.viewHeader}>
          <View style={styles.viewOnline}>
            <Text style={styles.bestFriend}>bạn tốt</Text>
            <TouchableOpacity>
              <Icon
                type={'ant-design'}
                name="pluscircleo"
                size={20}
                color={colors.primary_text}
              />
            </TouchableOpacity>
          </View>
          <Search placeholder="tìm kiếm" style={styles.search} />
        </View>
        <View style={styles.viewListItem}>
          <FlatList
            data={LIST_ITEM_DATA}
            renderItem={({item, index}) => {
              return (
                <Item
                  onPress={item.onPress}
                  backgroundColor={item.backgroundColor}
                  leftComponent={() => {
                    return (
                      <Icon
                        name={item.icon.name}
                        size={item.icon.size}
                        color={item.icon.color}
                        type={item.icon.type}
                      />
                    );
                  }}
                  label={item.label}
                  hideDivider={
                    LIST_ITEM_DATA.length - 1 == index ? true : false
                  }
                />
              );
            }}
          />
        </View>
        <FlatList
          data={friendList}
          contentContainerStyle={styles.viewListFriend}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({item, index}) => {
            return (
              <ItemFriend
                onPress={() => {
                  createMessage();
                }}
                data={item}
              />
            );
          }}
        />
      </View>
    </>
  );
};
