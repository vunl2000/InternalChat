import { HEIGHT_INPUT, RADIUS_INPUT } from "@constants";
import { colors, fonts } from "@styles";
import React from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
export interface ISearch extends TextInputProps {
  style?: ViewStyle;
}
export const Search: React.FC<ISearch> = ({ style, ...rest }) => {
  return (
    <View style={[styles.container, style]}>
      <Icon name={"search-outline"} size={20} />
      <TextInput numberOfLines={1} style={styles.input} {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: HEIGHT_INPUT,
    backgroundColor: colors.background,
    borderRadius: 10,
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    fontFamily: fonts.medium,
    flex: 1,
    marginLeft: 4,
  },
});
