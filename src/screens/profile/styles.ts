import { SCREEN_HEIGHT, STATUS_BAR_HEIGHT } from "@constants";
import { colors, fonts, fontSizes } from "@styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.foreground,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    top: -50,
    backgroundColor: colors.foreground,
  },
  iconScan: {
    position: "absolute",
    top: STATUS_BAR_HEIGHT + 10,
    right: 20,
  },
  imgCover: {
    width: "100%",
    height: SCREEN_HEIGHT / 5.5,
  },
  viewInfo: {
    backgroundColor: colors.background,
    paddingBottom: 24,
    paddingLeft: 20,
    paddingRight: 16,
    height: 120,
  },
  wrapInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: -30,
    alignItems: "center",
  },
  name: {
    fontFamily: fonts.bold,
    marginTop: 5,
    fontSize: fontSizes.x_large,
    color: colors.primary_text,
  },
  email: {
    fontFamily: fonts.medium,
    color: colors.secondary_text,
    marginTop: 5,
  },
});
