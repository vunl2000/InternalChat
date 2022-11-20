import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "@styles";

export const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.foreground,
  },
});
