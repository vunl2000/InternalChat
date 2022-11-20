import { STATUS_BAR_HEIGHT } from "@constants";
import { useNavigation } from "@react-navigation/native";
import { colors, fonts, fontSizes } from "@styles";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface IHeader {
  title?: string;
}
export const Header: React.FC<IHeader> = ({ title }) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <TouchableOpacity onPress={goBack}>
          <Icon
            name={"arrow-back"}
            size={24}
            color={colors.white}
            style={{ marginLeft: 20 }}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50 + STATUS_BAR_HEIGHT,
    paddingTop: STATUS_BAR_HEIGHT + 10,
    flexDirection: "row",
    backgroundColor: colors.primary,
  },
  icon: {},
  title: {
    fontFamily: fonts.medium,
    fontSize: fontSizes.x_large,
    color: colors.white,
    textAlign: "center",
    marginLeft: 20,
  },
});
