import {Button, ErrorMessage, Icon, Input} from '@components';
import {COLLECTIONS, SCREENS, IS_ANDROID} from '@constants';
import {showNotice} from '@helpers';
import {useLoading} from '@hooks';
import {useNavigation} from '@react-navigation/native';
import {addUserInfo} from '@redux';
import {useFormik} from 'formik';
import React, {useEffect, useState} from 'react';
import {Keyboard, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';
import {styles} from './styles';

export const SignIn: React.FC = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const {showLoading, hideLoading} = useLoading();
  const [keyboardShow, setKeyboardShow] = useState<boolean>(false);

  useEffect(() => {
    const keyboardShowAndroid = Keyboard.addListener('keyboardDidShow', e => {
      IS_ANDROID && setKeyboardShow(true);
    });
    const keyboardHideAndroid = Keyboard.addListener('keyboardDidHide', e => {
      IS_ANDROID && setKeyboardShow(false);
    });
    return () => {
      keyboardShowAndroid.remove();
      keyboardHideAndroid.remove();
    };
  }, []);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email phải là email hợp lệ')
      .required('Bắt buộc'),
    password: Yup.string()
      .min(8, 'Mật khẩu quá ngắn - tối thiểu phải có 8 ký tự')
      .required('Bắt buộc'),
  });

  const initialValues = {
    email: '',
    password: '',
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
      try {
      } catch (error: any) {
        switch (error.code) {
          case 'auth/user-not-found':
            showNotice('Không hợp lê', 'danger');
            break;
          case 'auth/wrong-password':
            showNotice('Tài khoản hoặc mật khẩu không chính xác', 'danger');
            break;
          default:
            showNotice(error.message, 'danger');
            break;
        }
        hideLoading();
      }
    },
  });

  const onSignUp = () => {
    navigation.navigate(SCREENS.SIGN_UP);
  };

  const onSignIn = async () => {
    if (values.email === '' || values.password === '') {
      showNotice('Bạn cần điền vào tất cả các trường bắt buộc!', 'danger');
      return;
    } else {
      handleSubmit();
    }
  };

  return (
    <>
      <KeyboardAwareScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        enableOnAndroid={false}
        extraScrollHeight={0}
        style={styles.container}>
        <Text style={styles.welcome}>Đăng Nhập</Text>
        <Input
          leftComponent={() => {
            return (
              <Icon
                type={'simple-line-icon'}
                name={'screen-smartphone'}
                size={20}
              />
            );
          }}
          value={values.email}
          onChangeText={val => {
            setFieldValue('email', val);
            setFieldTouched('email', true, false);
          }}
          onFocus={() => {
            IS_ANDROID && setKeyboardShow(true);
          }}
          onBlur={handleBlur('email')}
          keyboardType={'email-address'}
          autoCapitalize="none"
          autoComplete="off"
          placeholder={'Email'}
          style={{marginTop: 20}}
        />
        {touched.email && errors.email && <ErrorMessage msg={errors.email} />}
        <Input
          leftComponent={() => {
            return (
              <Icon type={'simple-line-icon'} name={'lock-open'} size={20} />
            );
          }}
          value={values.password}
          onChangeText={val => {
            setFieldValue('password', val);
            setFieldTouched('password', true, false);
          }}
          onFocus={() => {
            IS_ANDROID && setKeyboardShow(true);
          }}
          onBlur={handleBlur('password')}
          autoCapitalize="none"
          autoComplete="off"
          placeholder={'Vui lòng nhập mật mã'}
          secureTextEntry
          style={{marginTop: 20}}
        />
        {touched.password && errors.password && (
          <ErrorMessage msg={errors.password} />
        )}
        <Button
          onPress={onSignIn}
          title={'đăng nhập'}
          style={{marginTop: 50}}
        />
      </KeyboardAwareScrollView>
      {!keyboardShow && (
        <View style={styles.footer}>
          <Text style={styles.meansAgree} numberOfLines={1}>
            Đăng nhập có nghĩa là đồng ý
            <Text style={styles.terms}>
              {`${'<<'}` + 'điều khoản sử dụng' + `${'>>'}`}
            </Text>
          </Text>
          <Text style={styles.privacyAgreement}>
            {`${'<<'}` + 'Thỏa thuận quyền riêng tư' + `${'>>'}`}
          </Text>
          <Text onPress={onSignUp} style={styles.textSignUp}>
            ĐĂNG KÍ
          </Text>
        </View>
      )}
    </>
  );
};
