import {BASE_PADDING} from '@constants';
import {colors, fonts, fontSizes} from '@styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: BASE_PADDING,
  },
  welcome: {
    fontSize: 25,
    color: colors.primary_text,
    paddingBottom: 50,
    fontFamily: fonts.medium,
  },
  footer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
  meansAgree: {
    alignSelf: 'center',
    marginTop: 25,
    flexDirection: 'row',
    textAlign: 'center',
    fontFamily: fonts.medium,
    fontSize: fontSizes.medium,
    color: colors.primary_text,
    marginHorizontal: 24,
  },
  terms: {
    fontFamily: fonts.medium,
    fontSize: fontSizes.medium,
    color: colors.primary,
  },
  privacyAgreement: {
    fontFamily: fonts.medium,
    fontSize: fontSizes.medium,
    color: colors.primary,
    textAlign: 'center',
  },
  textSignUp: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.medium,
    color: colors.primary,
    marginLeft: 50,
    marginTop: 30,
  },
});
