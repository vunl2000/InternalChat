import { colors, fonts } from "@styles";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface ItemProps {
  onPress?: () => void;
  label: string;
  leftComponent?: any;
}
export const Item: React.FC<ItemProps> = ({
  onPress,
  label,
  leftComponent,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {leftComponent && leftComponent()}
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          flex: 1,
        }}
      >
        <Text style={styles.label}>{label}</Text>
        <Icon
          name={"chevron-forward-outline"}
          size={20}
          color={colors.secondary_text}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 15,
  },
  label: {
    fontFamily: fonts.bold,
    color: colors.primary_text,
    marginLeft: 8,
  },
});
