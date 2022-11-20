import {Header} from '@components';
import {COLLECTIONS} from '@constants';
import {useLoading} from '@hooks';
import {RootState} from '@redux';
import {User} from '@types';
import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Item} from './component/item';
import {styles} from './styles';

export const AddFriend: React.FC = () => {
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

  const handleAddFriend = async (item: User) => {
    showLoading();
    // await firestore()
    //   .collection(COLLECTIONS.USERS)
    //   .doc(item.uid)
    //   .update({
    //     pendingFriends: firestore.FieldValue.arrayUnion(user.uid),
    //   });
    // await firestore()
    //   .collection(COLLECTIONS.USERS)
    //   .doc(user.uid)
    //   .update({
    //     sentFriendRequests: firestore.FieldValue.arrayUnion(item.uid),
    //   });
    hideLoading();
  };

  return (
    <View style={styles.container}>
      <Header title="Thêm bạn mới" />
      <FlatList
        contentContainerStyle={styles.flatlist}
        data={userList}
        renderItem={({item}) => {
          let show = false;
          if (user.uid !== item.uid && userData) {
            if (userData.sentFriendRequests.includes(item.uid)) {
            } else if (userData.pendingFriends.includes(item.uid)) {
            } else if (userData.friendList.includes(item.uid)) {
            } else {
              show = true;
            }
          }
          return (
            <>
              {show && (
                <Item
                  data={item}
                  onPress={() => {
                    handleAddFriend(item);
                  }}
                />
              )}
            </>
          );
        }}
      />
    </View>
  );
};
