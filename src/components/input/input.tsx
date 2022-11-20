import { HEIGHT_INPUT, RADIUS_INPUT } from "@constants";
import { colors, fonts } from "@styles";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
export interface IInput extends TextInputProps {
  style?: ViewStyle;
  isPassword?: boolean;
  leftComponent?: any;
}
export const Input: React.FC<IInput> = ({
  style,
  isPassword,
  leftComponent,
  ...props
}) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");

  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return (
    <View style={[styles.container, style]}>
      {leftComponent && leftComponent()}
      <TextInput
        secureTextEntry={isPassword && passwordVisibility}
        numberOfLines={1}
        style={styles.input}
        placeholderTextColor={colors.secondary_text}
        {...props}
      />
      {isPassword && (
        <Pressable onPress={handlePasswordVisibility}>
          <Icon name={rightIcon} size={20} color={colors.secondary_text} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: HEIGHT_INPUT,
    borderRadius: RADIUS_INPUT,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    fontFamily: fonts.medium,
    flex: 1,
    color: colors.primary_text,
  },
});
