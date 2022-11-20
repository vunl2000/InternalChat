import {BASE_PADDING, STATUS_BAR_HEIGHT} from '@constants';
import {colors, fonts, fontSizes} from '@styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: STATUS_BAR_HEIGHT,
  },
  viewHeader: {
    paddingHorizontal: BASE_PADDING,
  },
  bestFriend: {
    fontFamily: fonts.bold,
    color: colors.primary_text,
    fontSize: fontSizes.x_large,
  },
  viewOnline: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  search: {
    marginBottom: 10,
  },
  viewListItem: {backgroundColor: colors.background, paddingHorizontal: 20},
  viewListFriend: {backgroundColor: colors.background, marginTop: 10},
});
