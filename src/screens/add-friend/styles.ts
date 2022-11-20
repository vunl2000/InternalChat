import {BASE_PADDING} from '@constants';
import {colors} from '@styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchWrapper: {
    marginHorizontal: BASE_PADDING,
  },
  flatlist: {
    backgroundColor: colors.background,
    marginTop: 10,
  },
});
