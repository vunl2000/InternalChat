import {Button, ErrorMessage, Header, Input} from '@components';
import {SCREENS} from '@constants';
import {showNotice} from '@helpers';
import {useLoading} from '@hooks';
import {useNavigation} from '@react-navigation/native';
import {removeUserInfo, RootState} from '@redux';

import {useFormik} from 'formik';
import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import {styles} from './styles';

export const ChangePassword: React.FC = () => {
  const {showLoading, hideLoading} = useLoading();
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.userInfo);

  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string()
      .min(8, 'Mật khẩu quá ngắn - tối thiểu phải có 8 ký tự')
      .required('Bắt buộc'),
    password: Yup.string()
      .min(8, 'Mật khẩu quá ngắn - tối thiểu phải có 8 ký tự')
      .required('Bắt buộc'),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Mật khẩu phải trùng khớp')
      .required('Bắt buộc'),
  });

  const initialValues = {
    oldPassword: '',
    password: '',
    passwordConfirmation: '',
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
      // const cred = firebase.auth.EmailAuthProvider.credential(
      //   user.email,
      //   values.oldPassword,
      // );

      // firebase
      //   .app()
      //   .auth()
      //   .currentUser?.reauthenticateWithCredential(cred)
      //   .then(() => {
      //     try {
      //       firebase.auth().currentUser?.updatePassword(values.password);
      //       showNotice('Thay đổi mật khẩu thành công !!!', 'success');
      //       dispatch(removeUserInfo());
      //       navigation.reset({
      //         index: 0,
      //         routes: [{name: SCREENS.SIGN_IN}],
      //       });
      //       hideLoading();
      //     } catch (error: any) {
      //       showNotice(error.message, 'danger');
      //       hideLoading();
      //     }
      //   })
      //   .catch((error: any) => {
      //     switch (error.code) {
      //       case 'auth/wrong-password':
      //         showNotice('Mật khẩu cũ không đúng', 'danger');
      //         break;
      //       default:
      //         showNotice(error.message, 'danger');
      //         break;
      //     }
      hideLoading();
      // });
    },
  });

  return (
    <View style={styles.container}>
      <Header title="Thay đổi mật khẩu" />
      <View style={styles.content}>
        <Input
          value={values.oldPassword}
          onChangeText={val => {
            setFieldValue('oldPassword', val);
            setFieldTouched('oldPassword', true, false);
          }}
          onBlur={handleBlur('oldPassword')}
          autoCapitalize="none"
          autoComplete="off"
          isPassword
          placeholder={'Nhập mật khẩu cũ'}
          style={{marginTop: 20}}
        />
        {touched.oldPassword && errors.oldPassword && (
          <ErrorMessage msg={errors.oldPassword} />
        )}
        <Input
          value={values.password}
          onChangeText={val => {
            setFieldValue('password', val);
            setFieldTouched('password', true, false);
          }}
          onBlur={handleBlur('password')}
          autoCapitalize="none"
          autoComplete="off"
          isPassword
          placeholder={'Nhập mật khẩu mới'}
          style={{marginTop: 20}}
        />
        {touched.password && errors.password && (
          <ErrorMessage msg={errors.password} />
        )}
        <Input
          value={values.passwordConfirmation}
          onChangeText={val => {
            setFieldValue('passwordConfirmation', val);
            setFieldTouched('passwordConfirmation', true, false);
          }}
          onBlur={handleBlur('passwordConfirmation')}
          autoCapitalize="none"
          autoComplete="off"
          isPassword
          placeholder={'Nhập lại mật khẩu mới'}
          style={{marginTop: 20}}
        />
        {touched.passwordConfirmation && errors.passwordConfirmation && (
          <ErrorMessage msg={errors.passwordConfirmation} />
        )}

        <Button onPress={handleSubmit} title="Lưu" style={{marginTop: 20}} />
      </View>
    </View>
  );
};
