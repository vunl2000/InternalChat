import { colors, fonts } from "@styles";
import { User } from "@types";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BASE_PADDING } from "@constants";

interface ItemProps {
  data: User;
  onAccept: () => void;
  onDecline: () => void;
}

const AVATAR_WIDTH = 50;

export const ItemPending: React.FC<ItemProps> = ({
  data,
  onAccept,
  onDecline,
}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.wrapperContent}>
          <Image source={{ uri: data?.photoUrl }} style={styles.avatar} />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text numberOfLines={1} style={styles.fullName}>
              {data?.fullName}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={onDecline}>
                <Text style={styles.declineButton}>Từ chối</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onAccept}>
                <Text style={styles.acceptButton}>Đồng ý</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 4,
    alignItems: "center",
    paddingHorizontal: BASE_PADDING,
  },

  wrapperContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatar: {
    width: AVATAR_WIDTH,
    height: AVATAR_WIDTH,
    borderRadius: AVATAR_WIDTH / 2,
    backgroundColor: colors.foreground,
  },
  fullName: {
    color: colors.primary_text,
    fontFamily: fonts.medium,
    marginHorizontal: 8,
    marginBottom: 4,
    flex: 1,
  },
  acceptButton: {
    backgroundColor: `${colors.primary}`,
    padding: 10,
    flex: 1,
    color: colors.white,
    textAlign: "center",
    fontFamily: fonts.medium,
  },
  declineButton: {
    backgroundColor: `${colors.backdrop}`,
    padding: 10,
    color: colors.white,
    textAlign: "center",
    fontFamily: fonts.medium,
  },
});
