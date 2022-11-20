import {Header} from '@components';
import {COLLECTIONS} from '@constants';
import {useLoading} from '@hooks';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {RootState} from '@redux';
import {colors, fonts, fontSizes} from '@styles';
import {User} from '@types';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ItemPending} from './component/item-pending';
import {ItemSent} from './component/item-sent';

const Tab = createMaterialTopTabNavigator();

const TabOne: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.userInfo);
  const dispatch = useDispatch();
  const {showLoading, hideLoading} = useLoading();

  const [userList, setUserList] = useState<Array<User>>([]);
  const [userData, setUserData] = useState<User>();
  // useEffect(() => {
  //   const unsubscribe = firestore()
  //     .collection(COLLECTIONS.USERS)
  //     .onSnapshot(querySnapshot => {
  //       const filter: any = querySnapshot.docs.filter(e => e.id == user.uid);
  //       let myFriendList: User = filter[0].data();
  //       setUserData(myFriendList);
  //       const data = querySnapshot.docs.map((doc: any) => {
  //         return {
  //           uid: doc.id,
  //           ...doc.data(),
  //         };
  //       });
  //       setUserList(data);
  //     });
  //   return () => unsubscribe();
  // }, []);

  const handleDecline = async (id: string) => {
    showLoading();
    // await firestore()
    //   .collection(COLLECTIONS.USERS)
    //   .doc(id)
    //   .update({
    //     pendingFriends: user.pendingFriends.filter(
    //       (friendId: string) => friendId != id && friendId != user.uid,
    //     ),
    //   });

    // await firestore()
    //   .collection(COLLECTIONS.USERS)
    //   .doc(user.uid)
    //   .update({
    //     pendingFriends: user.pendingFriends.filter(
    //       (friendId: string) => friendId != id && friendId != user.uid,
    //     ),
    //   });

    hideLoading();
  };

  // const createMessage = (friendId: string) => {
  //   firestore()
  //     .collection('rooms')
  //     .add({
  //       name: '',
  //       createdAt: Date.now(),
  //       admin_id: friendId,
  //       latest_message: {
  //         text: `Bạn đã tham gia cuộc trò chuyện.`,
  //         createdAt: new Date().getTime(),
  //       },
  //       member: [friendId, user.uid],
  //       public: false,
  //     })
  //     .then(docRef => {});
  // };

  const handleAccept = async (id: string) => {
    showLoading();
    // await firestore()
    //   .collection(COLLECTIONS.USERS)
    //   .doc(user.uid)
    //   .update({
    //     friendList: firestore.FieldValue.arrayUnion(id),
    //   });
    // await firestore()
    //   .collection(COLLECTIONS.USERS)
    //   .doc(id)
    //   .update({
    //     friendList: firestore.FieldValue.arrayUnion(user.uid),
    //   });
    // userData &&
    //   (await firestore()
    //     .collection(COLLECTIONS.USERS)
    //     .doc(user.uid)
    //     .update({
    //       pendingFriends: userData.pendingFriends.filter(
    //         (friendId: string) => friendId != id && friendId != user.uid,
    //       ),
    //     }));
    // userData &&
    //   (await firestore()
    //     .collection(COLLECTIONS.USERS)
    //     .doc(id)
    //     .update({
    //       pendingFriends: userData.pendingFriends.filter(
    //         (friendId: string) => friendId != id && friendId != user.uid,
    //       ),
    //     }));
    // userData &&
    //   (await firestore()
    //     .collection(COLLECTIONS.USERS)
    //     .doc(user.uid)
    //     .update({
    //       sentFriendRequests: userData.sentFriendRequests.filter(
    //         (friendId: string) => friendId != id && friendId != user.uid,
    //       ),
    //     }));
    // userData &&
    //   (await firestore()
    //     .collection(COLLECTIONS.USERS)
    //     .doc(id)
    //     .update({
    //       sentFriendRequests: userData.sentFriendRequests.filter(
    //         (friendId: string) => friendId != id && friendId != user.uid,
    //       ),
    //     }));

    // createMessage(id);

    hideLoading();
  };

  return (
    <>
      <FlatList
        contentContainerStyle={{
          backgroundColor: colors.background,
          marginTop: 10,
        }}
        data={userList}
        renderItem={({item}) => {
          let show = false;
          if (user.uid !== item.uid && userData) {
            if (userData.pendingFriends.includes(item.uid)) {
              show = true;
            } else {
              show = false;
            }
          }
          return (
            <>
              {show && (
                <ItemPending
                  onDecline={() => {
                    handleDecline(item.uid);
                  }}
                  onAccept={() => {
                    handleAccept(item.uid);
                  }}
                  data={item}
                />
              )}
            </>
          );
        }}
      />
    </>
  );
};

const TabTwo: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.userInfo);
  const dispatch = useDispatch();
  const {showLoading, hideLoading} = useLoading();

  const [userList, setUserList] = useState<Array<User>>([]);
  const [userData, setUserData] = useState<User>();
  // useEffect(() => {
  //   const unsubscribe = firestore()
  //     .collection(COLLECTIONS.USERS)
  //     .onSnapshot(querySnapshot => {
  //       const filter: any = querySnapshot.docs.filter(e => e.id == user.uid);
  //       let myFriendList: User = filter[0].data();
  //       setUserData(myFriendList);
  //       const data = querySnapshot.docs.map((doc: any) => {
  //         return {
  //           uid: doc.id,
  //           ...doc.data(),
  //         };
  //       });
  //       setUserList(data);
  //     });

  //   return () => unsubscribe();
  // }, []);

  const onPressItem = async (id: string) => {
    showLoading();

    // userData &&
    //   (await firestore()
    //     .collection(COLLECTIONS.USERS)
    //     .doc(id)
    //     .update({
    //       pendingFriends: userData.pendingFriends.filter(
    //         (friendId: string) => friendId != id && friendId != user.uid,
    //       ),
    //     }));

    // userData &&
    //   (await firestore()
    //     .collection(COLLECTIONS.USERS)
    //     .doc(user.uid)
    //     .update({
    //       sentFriendRequests: userData.sentFriendRequests.filter(
    //         (friendId: string) => friendId != id && friendId != user.uid,
    //       ),
    //     }));

    hideLoading();
  };

  return (
    <>
      <FlatList
        contentContainerStyle={{
          backgroundColor: colors.background,
          marginTop: 10,
        }}
        data={userList}
        renderItem={({item}) => {
          let show = false;
          if (userData) {
            if (userData.sentFriendRequests.includes(item.uid)) {
              show = true;
            } else {
              show = false;
            }
          }
          return (
            <>
              {show && (
                <ItemSent
                  onPress={() => {
                    onPressItem(item.uid);
                  }}
                  data={item}
                />
              )}
            </>
          );
        }}
      />
    </>
  );
};

export const FriendRequest: React.FC = () => {
  return (
    <>
      <Header title="Lời mời kết bạn" />
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: fontSizes.medium,
            fontFamily: fonts.medium,
          },
          tabBarIndicatorStyle: {
            backgroundColor: colors.primary,
            height: 1,
          },
          tabBarStyle: {},
        }}>
        <Tab.Screen name="Đã nhận" component={TabOne} />
        <Tab.Screen name="Đã gửi" component={TabTwo} />
      </Tab.Navigator>
    </>
  );
};
