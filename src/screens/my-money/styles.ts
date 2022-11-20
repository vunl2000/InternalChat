import { SCREEN_HEIGHT, SCREEN_WIDTH, STATUS_BAR_HEIGHT } from "@constants";
import { colors, fonts, fontSizes } from "@styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT / 2,
    backgroundColor: "#1e2227",
  },
  money: {
    marginTop: STATUS_BAR_HEIGHT + 20,
    textAlign: "center",
    fontSize: fontSizes.medium,
    fontFamily: fonts.bold,
    color: colors.white,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 30,
    borderWidth: 2,
    borderColor: "#dda456",
  },
  viewAre: {
    backgroundColor: "#1e2227",
    height: 80,
    width: SCREEN_WIDTH,
    alignSelf: "center",
  },

  viewMoney: {
    height: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  viewEye: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  withdraw: {
    color: "white",
    backgroundColor: "#393e43",
    width: 120,
    alignItems: "center",
    alignSelf: "center",
    height: 40,
    borderRadius: 20,
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: fonts.medium,
  },
  myBalance: {
    color: colors.white,
    fontFamily: fonts.medium,
    fontSize: fontSizes.small,

    marginLeft: 5,
  },
  valueBalance: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 30,
    textAlign: "center",
  },

  viewCard: {
    backgroundColor: colors.white,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    padding: 20,
  },
  service: {
    color: colors.primary_text,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: fonts.medium,
  },
});
