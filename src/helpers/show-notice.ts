import {IS_ANDROID, STATUS_BAR_HEIGHT} from '@constants';
import {fonts} from '@styles';
import {MessageType, showMessage} from 'react-native-flash-message';

export const showNotice = (message: string, type: MessageType) => {
  type = type;
  showMessage({
    message: message,
    type: type,
    titleStyle: {
      fontFamily: fonts.medium,
    },
    style: {
      marginTop: IS_ANDROID ? STATUS_BAR_HEIGHT : 0,
    },
  });
};
