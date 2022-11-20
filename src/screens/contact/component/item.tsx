import { colors, fonts } from "@styles";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ItemProps {
  onPress?: () => void;
  label: string;
  leftComponent?: any;
  backgroundColor?: string;
  hideDivider?: boolean;
}
export const Item: React.FC<ItemProps> = ({
  onPress,
  label,
  leftComponent,
  backgroundColor,
  hideDivider,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.icon, { backgroundColor: backgroundColor }]}>
        {leftComponent && leftComponent()}
      </View>
      <View style={[styles.view, { borderBottomWidth: hideDivider ? 0 : 1 }]}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  label: {
    fontFamily: fonts.bold,
    color: colors.primary_text,
    marginLeft: 8,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 1,
    height: "100%",
    borderColor: colors.foreground,
    alignItems: "center",
  },
});
