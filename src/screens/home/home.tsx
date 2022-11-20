import {Button, Divider, Icon, Input, Search} from '@components';
import {COLLECTIONS, SCREENS} from '@constants';

import {showNotice} from '@helpers';
import {useNavigation} from '@react-navigation/native';
import {RootState} from '@redux';
import {colors} from '@styles';
import {Room, User} from '@types';
import React, {useEffect, useState} from 'react';

import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Dialog, Portal, Provider as PaperProvider} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {styles} from './styles';

export const Home: React.FC = () => {
  const navigation = useNavigation<any>();
  const user = useSelector((state: RootState) => state.user.userInfo);

  const [showDialog, setShowDialog] = useState(false);
  const [roomName, setRoomName] = useState('');

  const onItem = (item: Room) => {
    navigation.navigate(SCREENS.CHAT, {
      item,
    });
  };

  const onFab = () => {
    setShowDialog(true);
  };

  const [rooms, setRooms] = useState<Array<Room>>([]);
  const [conversations, setConversations] = useState<Array<Room>>([]);
  const [allUser, setAllUser] = useState<Array<User>>([]);

  // useEffect(() => {
  //   const unsubscribe = firestore()
  //     .collection(COLLECTIONS.ROOMS)
  //     .where('public', '==', true)
  //     // .orderBy('latest_message.createdAt', 'desc')
  //     .onSnapshot(querySnapshot => {
  //       const data: any = querySnapshot?.docs.map(documentSnapshot => {
  //         return {
  //           _id: documentSnapshot.id,
  //           latest_message: {
  //             text: '',
  //           },
  //           name: '',
  //           ...documentSnapshot.data(),
  //         };
  //       });
  //       setRooms(data);
  //     });

  //   return () => unsubscribe();
  // }, []);

  // useEffect(() => {
  //   const unsubscribe = firestore()
  //     .collection(COLLECTIONS.USERS)
  //     .onSnapshot(querySnapshot => {
  //       const data = querySnapshot.docs.map((doc: any) => {
  //         return {
  //           uid: doc.id,
  //           ...doc.data(),
  //         };
  //       });
  //       setAllUser(data);
  //     });
  //   return () => unsubscribe();
  // }, []);

  // useEffect(() => {
  //   allUser.length !== 0 &&
  //     firestore()
  //       .collection(COLLECTIONS.ROOMS)
  //       .where('member', 'array-contains', user.uid)
  //       // .orderBy('latest_message.createdAt', 'desc')
  //       .onSnapshot(querySnapshot => {
  //         const data: any = querySnapshot?.docs.map(documentSnapshot => {
  //           return {
  //             _id: documentSnapshot.id,
  //             latest_message: {
  //               text: '',
  //             },

  //             ...documentSnapshot.data(),
  //           };
  //         });
  //         setConversations(data);
  //       });
  // }, [allUser]);

  // const onCreateGroup = () => {
  //   if (roomName.trim().length !== 0) {
  //     firestore()
  //       .collection(COLLECTIONS.ROOMS)
  //       .add({
  //         name: roomName,
  //         createdAt: Date.now(),
  //         admin_id: user?.uid,
  //         latest_message: {
  //           text: `Bạn đã tham gia vào phòng ${roomName}.`,
  //           createdAt: new Date().getTime(),
  //         },
  //         public: true,
  //       })
  //       .then(docRef => {
  //         // showNotice(t('success'), 'success');
  //         setShowDialog(false);
  //         setRoomName('');
  //         docRef.collection(COLLECTIONS.MESSAGES).add({
  //           text: `Bạn đã tham gia vào phòng ${roomName}.`,
  //           createdAt: new Date().getTime(),
  //           system: true,
  //         });
  //       });
  //   } else {
  //     showNotice('Bắt buộc', 'danger');
  //   }
  // };

  const PopUp = () => {
    return (
      <Dialog
        style={styles.dialog}
        dismissable={true}
        onDismiss={() => {
          setShowDialog(false);
        }}
        visible={showDialog}>
        <Dialog.Title style={styles.dialogTitle}>
          Tạo nhóm trò chuyện
        </Dialog.Title>
        <Dialog.Content>
          <Input
            autoFocus
            value={roomName}
            onChangeText={text => {
              setRoomName(text);
            }}
            placeholder={'Nhập tên nhóm ...'}
          />
          <Button style={styles.button} title={'Tạo'} onPress={() => {}} />
        </Dialog.Content>
      </Dialog>
    );
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={{paddingHorizontal: 20}}>
          <View style={styles.viewOnline}>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={styles.nameOnline}>Trò Chuyện</Text>
              <Text style={styles.online}>(online)</Text>
            </View>
            <TouchableOpacity onPress={onFab}>
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
        <View style={{backgroundColor: colors.background}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={rooms}
            renderItem={({item}) => {
              return (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      onItem(item);
                    }}
                    style={styles.card}>
                    <Image
                      style={styles.cardImage}
                      source={{
                        uri: 'https://i.pravatar.cc/300',
                      }}
                    />
                    <View style={{flex: 1}}>
                      <Text style={styles.cardTitle}>{item.name}</Text>
                      <Text style={styles.cardSubTilte}>
                        {item.latest_message.text}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </>
              );
            }}
            ItemSeparatorComponent={() => <Divider />}
            contentContainerStyle={styles.contentList}
          />
        </View>

        <View style={styles.viewListContact}>
          <Text style={styles.yourContact}>Liên lạc của bạn:</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={conversations}
            renderItem={({item}) => {
              const filterFriendId = item.member.filter(
                (e: string) => e != user.uid,
              );
              const filter = allUser.filter(e => e.uid == filterFriendId[0]);

              return (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      const newItem = {
                        ...item,
                        name: filter[0].fullName,
                      };
                      onItem(newItem);
                    }}
                    style={styles.card}>
                    <Image
                      style={styles.cardImage}
                      source={{
                        uri: filter[0].photoUrl,
                      }}
                      resizeMode={'repeat'}
                    />
                    <View style={{flex: 1}}>
                      <Text style={styles.cardTitle}>{filter[0].fullName}</Text>
                      <Text style={styles.cardSubTilte}>
                        {item.latest_message.text}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </>
              );
            }}
            ItemSeparatorComponent={() => <Divider />}
            contentContainerStyle={styles.contentList}
          />
        </View>
      </View>
      <Portal>{PopUp()}</Portal>
    </PaperProvider>
  );
};
