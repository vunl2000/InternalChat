import {Icon} from '@components';
import {SCREENS} from '@constants';
import {useNavigation} from '@react-navigation/native';
import {colors} from '@styles';
import React, {useState} from 'react';
import {Pressable, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Item} from './component/item';
import {styles} from './styles';
export const MyMoney: React.FC = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [nameIcon, setNameIcon] = useState('eye-off');
  const navigation = useNavigation<any>();

  const onPressEye = () => {
    if (nameIcon === 'eye') {
      setNameIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (nameIcon === 'eye-off') {
      setNameIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return (
    <>
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.money}>Túi tiền của tôi</Text>
          <View style={styles.circle}>
            <Pressable onPress={onPressEye} style={styles.viewMoney}>
              <View style={styles.viewEye}>
                <Feather name={nameIcon} color={colors.white} size={15} />
                <Text style={styles.myBalance}>Số dư của tôi</Text>
              </View>
              <TextInput
                editable={false}
                style={styles.valueBalance}
                value={'12345'}
                secureTextEntry={passwordVisibility}
              />
            </Pressable>
            <View style={styles.viewAre}>
              <TouchableOpacity>
                <Text style={styles.withdraw}>Rút tiền</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.viewCard}>
            <Item
              leftComponent={() => {
                return (
                  <Icon
                    type={'ionicon'}
                    name={'wallet-outline'}
                    size={20}
                    color={colors.primary_text}
                  />
                );
              }}
              label="chi tiết ví tiền"
            />
            <View style={{marginBottom: 20}} />
            <Item
              leftComponent={() => {
                return (
                  <Icon
                    type={'simple-line-icon'}
                    name={'notebook'}
                    size={20}
                    color={colors.primary_text}
                  />
                );
              }}
              label="Nhật ký lì xì"
            />
            <View style={{marginBottom: 20}} />
            <Item
              onPress={() => {
                navigation.navigate(SCREENS.CHANGE_PASSWORD);
              }}
              leftComponent={() => {
                return (
                  <Icon
                    type={'simple-line-icon'}
                    name={'lock-open'}
                    size={20}
                    color={colors.primary_text}
                  />
                );
              }}
              label="Thay đổi mật khẩu"
            />
          </View>
        </View>
      </View>
      <Text style={styles.service}>dịch vụ này do THE HIGHT cung cấp</Text>
    </>
  );
};
