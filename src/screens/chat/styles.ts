import { colors, fonts } from "@styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  sendingContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginRight: 12,
  },
  systemMessageText: {
    color: colors.white,
    fontFamily: fonts.medium,
  },
  systemMessageWrapper: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 5,
  },
  bottomComponentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  photo: {
    marginLeft: 12,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
