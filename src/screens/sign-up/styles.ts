import {colors, fonts, fontSizes} from '@styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  welcome: {
    fontSize: 25,
    color: colors.primary_text,
    paddingBottom: 50,
    fontFamily: fonts.medium,
  },
  spacing: {
    marginBottom: 20,
  },
  closeIcon: {
    position: 'absolute',
    top: 50,
    left: 24,
  },
  footer: {
    width: '100%',
    marginBottom: 50,
  },
  checkedOff: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.border,
  },
  viewRule: {
    alignSelf: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    fontFamily: fonts.medium,
    fontSize: fontSizes.medium,
    color: colors.primary_text,
    marginLeft: 5,
  },
  signUp: {
    fontFamily: fonts.medium,
    fontSize: fontSizes.medium,
    color: colors.primary,
  },
  textPrivate: {
    fontFamily: fonts.medium,
    fontSize: fontSizes.medium,
    color: colors.primary,
    textAlign: 'center',
  },
});
