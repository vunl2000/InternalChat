import { colors, fonts, fontSizes } from "@styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: 24,
  },
  spacing: {
    marginTop: 20,
  },
  viewAvatar: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderWidth: 2,
    borderColor: "white",
    marginRight: 20,
    marginBottom: 50,
    alignSelf: "center",
    marginTop: 60,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 100 / 2,
    backgroundColor: colors.foreground,
  },
  iconCamera: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: colors.white,
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
