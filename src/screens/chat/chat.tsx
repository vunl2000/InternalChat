import {Header, Icon} from '@components';
import {useLoading} from '@hooks';
import {useRoute} from '@react-navigation/native';
import {RootState} from '@redux';
import {colors, fonts} from '@styles';
import {Room} from '@types';
import React, {useLayoutEffect, useState} from 'react';
import {
  ActivityIndicator,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ActionsProps,
  Bubble,
  GiftedChat,
  Send,
  SystemMessage,
} from 'react-native-gifted-chat';
import ImagePicker from 'react-native-image-crop-picker';
import {useSelector} from 'react-redux';
import {styles} from './styles';

export const Chat: React.FC = () => {
  const route = useRoute<any>();
  const [messages, setMessages] = useState<any>([]);
  const user = useSelector((state: RootState) => state.user.userInfo);
  const {showLoading, hideLoading} = useLoading();
  const room: Room = route.params.item;

  const onSend = async (messages: any) => {
    const text = messages[0].text;

    // firestore()
    //   .collection('rooms')
    //   .doc(room._id)
    //   .collection('messages')
    //   .add({
    //     text,
    //     createdAt: new Date().getTime(),
    //     user: {
    //       _id: user?.uid,
    //       email: user?.email,
    //     },
    //   });

    // await firestore()
    //   .collection('rooms')
    //   .doc(room._id)
    //   .set(
    //     {
    //       latest_message: {
    //         text,
    //         createdAt: new Date().getTime(),
    //       },
    //     },
    //     {merge: true},
    //   );
  };

  // useLayoutEffect(() => {
  //   const messagesListener = firestore()
  //     .collection('rooms')
  //     .doc(room?._id)
  //     .collection('messages')
  //     .orderBy('createdAt', 'desc')
  //     .onSnapshot(querySnapshot => {
  //       const messages = querySnapshot.docs.map(doc => {
  //         const firebaseData = doc.data();

  //         const data: any = {
  //           _id: doc.id,
  //           text: '',
  //           createdAt: new Date().getTime(),
  //           ...firebaseData,
  //         };

  //         if (!firebaseData.system) {
  //           data.user = {
  //             ...firebaseData.user,
  //             name: firebaseData.user.email,
  //           };
  //         }

  //         return data;
  //       });

  //       setMessages(messages);
  //     });

  //   return () => messagesListener();
  // }, []);

  const renderBubble = (props: any) => {
    return (
      <Bubble
        {...props}
        textStyle={{
          right: {
            color: colors.white,
            fontFamily: fonts.medium,
          },
          left: {
            color: colors.primary,
            fontFamily: fonts.medium,
          },
        }}
        wrapperStyle={{
          left: {
            backgroundColor: colors.white,
          },
          right: {
            backgroundColor: colors.primary,
          },
        }}
      />
    );
  };

  const renderSend = (props: any) => {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <Icon type={'ionicon'} name="send" size={20} color={colors.primary} />
        </View>
      </Send>
    );
  };

  const renderSystemMessage = (props: any) => {
    return (
      <SystemMessage
        {...props}
        wrapperStyle={styles.systemMessageWrapper}
        textStyle={styles.systemMessageText}
      />
    );
  };

  function scrollToBottomComponent() {
    return (
      <View style={styles.bottomComponentContainer}>
        <Icon
          type={'ionicon'}
          name="chevron-double-down"
          size={36}
          color={colors.primary}
        />
      </View>
    );
  }

  const renderLoading = () => {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  };

  const handlePickImage = () => {
    ImagePicker.openPicker({}).then(async image => {
      const path = image.path;
      const filename = user.uid + Date.now();
      const uploadUri =
        Platform.OS === 'ios' ? path.replace('file://', '') : path;
      showLoading();
      // await storage()
      //   .ref(filename)
      //   .putFile(uploadUri)
      //   .then(() => {
      //     let imageRef = storage().ref('/' + filename);
      //     imageRef
      //       .getDownloadURL()
      //       .then(url => {
      //         firestore()
      //           .collection('rooms')
      //           .doc(room._id)
      //           .collection('messages')
      //           .add({
      //             image: url,
      //             createdAt: new Date().getTime(),
      //             user: {
      //               _id: user?.uid,
      //               email: user?.email,
      //             },
      //           });

      //         hideLoading();
      //       })
      //       .catch(e => {
      //         hideLoading();
      //       });
      //   });
    });
  };

  function renderActions(props: Readonly<ActionsProps>) {
    return (
      <TouchableOpacity style={styles.photo} onPress={handlePickImage}>
        <Icon
          type={'ionicon'}
          name={'ios-image'}
          size={22}
          color={colors.primary}
        />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Header title={room?.name} />
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{_id: user.uid, name: user.fullName, avatar: user?.photoUrl}}
        renderSend={renderSend}
        renderBubble={renderBubble}
        renderSystemMessage={renderSystemMessage}
        scrollToBottomComponent={scrollToBottomComponent}
        renderLoading={renderLoading}
        renderActions={renderActions}
        alwaysShowSend
        scrollToBottom
        alignTop
        renderUsernameOnMessage={true}
        placeholder="Type a message..."
      />
    </View>
  );
};
