import React from 'react';
import {Image, Platform, TouchableOpacity, View} from 'react-native';

import {Button, ErrorMessage, Header, Icon, Input} from '@components';
import {COLLECTIONS} from '@constants';
import {showNotice} from '@helpers';
import {useLoading} from '@hooks';
import {RootState, updateUserInfo} from '@redux';
import {colors} from '@styles';

import {useFormik} from 'formik';
import ImagePicker from 'react-native-image-crop-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import {styles} from './styles';

export const EditInfor: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.userInfo);

  const {showLoading, hideLoading} = useLoading();
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email phải là email hợp lệ')
      .required('Bắt buộc'),
    fullName: Yup.string().required('Bắt buộc'),
  });

  const initialValues = {
    email: user.email ? user.email : '',
    fullName: user.fullName ? user.fullName : '',
  };

  const {
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
    setFieldValue,
    setFieldTouched,
  } = useFormik({
    validationSchema: validationSchema,
    initialValues: initialValues,
    onSubmit: async (values, actions) => {
      showLoading();
      // await firestore()
      //   .collection(COLLECTIONS.USERS)
      //   .doc(user.uid)
      //   .update({
      //     fullName: values.fullName,
      //   })
      //   .then(() => {
      //     dispatch(updateUserInfo({fullName: values.fullName}));
      //     showNotice('Cập nhật thành công!', 'success');
      //     hideLoading();
      //   })
      //   .catch(error => {
      hideLoading();
      // });
    },
  });

  const onSave = () => {
    if (values.fullName === '') {
      showNotice('Bạn cần điền vào tất cả các trường bắt buộc!', 'danger');
      return;
    } else {
      handleSubmit();
    }
  };

  const onPressImage = () => {
    ImagePicker.openPicker({
      includeBase64: false,
      width: 100,
      height: 100,
      cropping: true,
    }).then(async image => {
      const path = image.path;
      // const filename = path.substring(path.lastIndexOf('/') + 1);
      const filename = user.uid;
      const uploadUri =
        Platform.OS === 'ios' ? path.replace('file://', '') : path;
      showLoading();
      //   await storage()
      //     .ref(filename)
      //     .putFile(uploadUri)
      //     .then(() => {
      //       let imageRef = storage().ref('/' + filename);
      //       imageRef
      //         .getDownloadURL()
      //         .then(url => {
      //           updateImage(url);
      //         })
      //         .catch(e => {
      //           hideLoading();
      //         });
      //     });
      // })
      // .catch(err => {
      hideLoading();
    });
  };

  const updateImage = async (url: any) => {
    // await firestore()
    //   .collection(COLLECTIONS.USERS)
    //   .doc(user.uid)
    //   .update({
    //     photoUrl: url,
    //   })
    //   .then(() => {
    //     dispatch(updateUserInfo({photoURL: url}));
    //     showNotice('Cập nhật ảnh thành công!', 'success');
    //     hideLoading();
    //   })
    //   .catch(error => {
    //     hideLoading();
    //   });
  };

  return (
    <KeyboardAwareScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={styles.container}>
      <Header title="Thông tin cá nhân" />
      <View style={styles.content}>
        <View style={styles.viewAvatar}>
          <Image
            style={styles.avatar}
            source={{
              uri: user?.photoUrl ? user.photoUrl : undefined,
            }}
          />
          <TouchableOpacity onPress={onPressImage} style={styles.iconCamera}>
            <Icon
              type={'ionicon'}
              name="camera"
              size={20}
              color={colors.black}
            />
          </TouchableOpacity>
        </View>
        <Input
          value={values.fullName}
          onChangeText={val => {
            setFieldValue('fullName', val);
            setFieldTouched('fullName', true, false);
          }}
          onBlur={handleBlur('fullName')}
          autoCapitalize="words"
          autoComplete="off"
          placeholder={'Tên hiển thị'}
          style={styles.spacing}
        />
        {touched.fullName && errors.fullName && (
          <ErrorMessage msg={errors.fullName} />
        )}
        <Input
          placeholder={'Email'}
          editable={false}
          value={values.email}
          style={styles.spacing}
        />
        <View style={styles.spacing}>
          <Button onPress={onSave} title="Lưu" />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
