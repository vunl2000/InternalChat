import {BASE_PADDING, STATUS_BAR_HEIGHT} from '@constants';
import {colors, fonts, fontSizes} from '@styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.foreground,
    paddingTop: STATUS_BAR_HEIGHT,
  },
  logo: {
    paddingTop: 50,
    fontSize: 30,
  },
  card: {
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    fontFamily: fonts.medium,
    color: colors.primary_text,
  },
  cardSubTilte: {
    fontFamily: fonts.medium,
    color: colors.secondary_text,
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 60 / 2,
    marginRight: 12,
    marginLeft: 8,
    backgroundColor: colors.page_background,
    marginVertical: 10,
  },
  separator: {
    height: 8,
  },
  contentList: {},
  search: {
    marginBottom: 10,
  },

  dialogTitle: {
    fontFamily: fonts.medium,
    color: colors.primary_text,
  },
  dialog: {
    backgroundColor: colors.background,
    borderRadius: 20,
    marginBottom: 200,
  },
  button: {
    marginTop: 20,
  },

  viewOnline: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  nameOnline: {
    fontFamily: fonts.bold,
    color: colors.primary_text,
    fontSize: fontSizes.x_large,
  },
  online: {
    fontFamily: fonts.bold,
    color: colors.primary_text,
  },

  yourContact: {
    fontFamily: fonts.medium,
    fontSize: fontSizes.large,
    paddingHorizontal: BASE_PADDING,
    paddingTop: 10,
    paddingBottom: 10,
    color: colors.primary,
  },
  viewListContact: {
    backgroundColor: colors.background,
    marginTop: 10,
  },
});
