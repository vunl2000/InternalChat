import {IS_ANDROID} from '@constants';
import {useEffect} from 'react';
import {Keyboard} from 'react-native';

export function useKeyboard() {
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {});
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      IS_ANDROID && Keyboard.dismiss();
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
}
