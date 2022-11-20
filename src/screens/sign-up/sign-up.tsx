import {Button, ErrorMessage, Icon, Input} from '@components';
import {COLLECTIONS, SCREENS} from '@constants';
import {showNotice} from '@helpers';
import {useLoading} from '@hooks';
import {useNavigation} from '@react-navigation/native';
import {colors} from '@styles';
import {User} from '@types';
import {useFormik} from 'formik';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Yup from 'yup';
import {styles} from './styles';

export const SignUp: React.FC = () => {
  const navigation = useNavigation<any>();
  const {showLoading, hideLoading} = useLoading();

  const randomCode = () => {
    let code = '';
    const alpha = '0123456789';
    const codeLength = 10;

    for (let i = 0; i < codeLength; i++) {
      code += alpha.charAt(Math.floor(Math.random() * alpha.length));
    }

    return code;
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Bắt buộc'),
    email: Yup.string()
      .email('Email phải là email hợp lệ')
      .required('Bắt buộc'),
    password: Yup.string()
      .min(8, 'Mật khẩu quá ngắn - tối thiểu phải có 8 ký tự')
      .required('Bắt buộc'),
    checked: Yup.boolean().required('Bắt buộc'),
    code: Yup.string().required('Bắt buộc'),
  });

  const initialValues = {
    fullName: '',
    email: '',
    password: '',
    checked: false,
    code: '',
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
      handleCheckRandomCode();
    },
  });

  const handleCheckRandomCode = () => {
    showLoading();
    let code = randomCode();
    const filterArray = dataCode.filter(e => e.code == values.code);
    if (filterArray.length == 0) {
      showNotice('Mã mời không hợp lệ', 'danger');
      hideLoading();
    } else if (filterArray[0].code == code) {
      handleCheckRandomCode();
    } else {
      addNewUser(code, filterArray[0]);
    }
  };

  const [dataCode, setDataCode] = useState<Array<User>>([]);

  const getAllCode = async () => {
    // const querySanp = await firestore()
    //   .collection(COLLECTIONS.USERS)
    //   .orderBy('code')
    //   .get();
    // const all: any = querySanp.docs.map(docSnap => docSnap.data());
    // if (all.length == 0) {
    // } else {
    //   setDataCode(all);
    // }
  };

  useEffect(() => {
    //getAllCode();
  }, []);

  const addNewUser = async (code: string, userInvited: User) => {
    try {
      // await auth()
      //   .createUserWithEmailAndPassword(values.email, values.password)
      //   .then(userCredential => {
      //     firestore()
      //       .collection(COLLECTIONS.USERS)
      //       .doc(userCredential.user.uid)
      //       .set({
      //         email: values.email,
      //         fullName: values.fullName,
      //         createdAt: firestore.Timestamp.fromDate(new Date()),
      //         photoUrl: null,
      //         invitedBy: null,
      //         friendList: [],
      //         pendingFriends: [],
      //         sentFriendRequests: [],
      //         code: code,
      //       });
      //   })
      //   .then(() => {
      //     showNotice('Account created successfully', 'success');
      //     navigation.navigate(SCREENS.SIGN_IN);
      //     hideLoading();
      //   })
      //   .catch((error: any) => {
      //     showNotice(error.message, 'danger');
      hideLoading();
      // });
    } catch (error: any) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          showNotice('Email already in use', 'danger');
          break;
        default:
          showNotice(error.message, 'danger');
          break;
      }
      hideLoading();
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  const onSignUp = () => {
    if (
      values.fullName === '' ||
      values.email === '' ||
      values.password === '' ||
      values.checked == false
    ) {
      showNotice('Bạn cần điền vào tất cả các trường bắt buộc!', 'danger');
      return;
    } else {
      handleSubmit();
    }
  };

  const onChange = () => {
    setFieldValue('checked', true);
  };

  return (
    <>
      <KeyboardAwareScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        extraScrollHeight={0}
        style={styles.container}>
        <Text style={styles.welcome}>Đăng ký tài khoản</Text>
        <Input
          leftComponent={() => {
            return (
              <Icon
                type="simple-line-icon"
                name={'social-soundcloud'}
                size={20}
                color={colors.secondary_text}
              />
            );
          }}
          value={values.fullName}
          onChangeText={val => {
            setFieldValue('fullName', val);
            setFieldTouched('fullName', true, false);
          }}
          onBlur={handleBlur('fullName')}
          autoCapitalize="words"
          autoComplete="off"
          placeholder={'Tên hiển thị'}
          style={{marginTop: 20}}
        />
        {touched.fullName && errors.fullName && (
          <ErrorMessage msg={errors.fullName} />
        )}
        <Input
          leftComponent={() => {
            return (
              <Icon
                type="simple-line-icon"
                name={'screen-smartphone'}
                size={20}
                color={colors.secondary_text}
              />
            );
          }}
          value={values.email}
          onChangeText={val => {
            setFieldValue('email', val);
            setFieldTouched('email', true, false);
          }}
          onBlur={handleBlur('email')}
          keyboardType={'email-address'}
          autoCapitalize="none"
          autoComplete="off"
          placeholder={'Email đăng nhập'}
          style={{marginTop: 20}}
        />
        <Input
          leftComponent={() => {
            return (
              <Icon
                type="simple-line-icon"
                name={'screen-smartphone'}
                size={20}
                color={colors.secondary_text}
              />
            );
          }}
          value={values.code}
          onChangeText={val => {
            setFieldValue('code', val);
            setFieldTouched('code', true, false);
          }}
          onBlur={handleBlur('code')}
          autoCapitalize="none"
          autoComplete="off"
          placeholder={'Nhập mã mời'}
          style={{marginTop: 20}}
        />
        {touched.email && errors.email && <ErrorMessage msg={errors.email} />}
        <Input
          leftComponent={() => {
            return (
              <Icon
                type="simple-line-icon"
                name={'lock-open'}
                size={20}
                color={colors.secondary_text}
              />
            );
          }}
          value={values.password}
          onChangeText={val => {
            setFieldValue('password', val);
            setFieldTouched('password', true, false);
          }}
          onBlur={handleBlur('password')}
          autoCapitalize="none"
          autoComplete="off"
          placeholder={'Thiết lập mật khẩu (ít nhất 8 ký tự)'}
          secureTextEntry
          style={{marginTop: 20}}
        />
        {touched.password && errors.password && (
          <ErrorMessage msg={errors.password} />
        )}
        <View style={styles.spacing} />
        <View style={styles.footer}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={onChange}>
              {values.checked == false && (
                <Icon
                  type={'ionicon'}
                  name={'radio-button-off'}
                  size={20}
                  color={colors.secondary_text}
                />
              )}
              {values.checked == true && (
                <Icon
                  type={'ionicon'}
                  name={'radio-button-on'}
                  size={20}
                  color={colors.secondary_text}
                />
              )}
            </TouchableOpacity>
            <Text style={styles.viewRule} numberOfLines={1}>
              Đọc và đồng ý
              <Text style={styles.signUp}>
                {`${' <<'}` + 'điều khoản sử dụng' + `${'>>'}`}
              </Text>
            </Text>
          </View>
          <Text style={styles.textPrivate}>
            {`${'<<'}` + 'Thỏa thuận quyền riêng tư' + `${'>>'}`}
          </Text>
        </View>
        <Button onPress={onSignUp} title={'Đăng kí'} />
      </KeyboardAwareScrollView>
      <TouchableOpacity onPress={goBack} style={styles.closeIcon}>
        <Icon type={'ant-design'} name="close" size={20} />
      </TouchableOpacity>
    </>
  );
};
