import {colors} from '@styles';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface ContainerProps {
  children: React.ReactNode;
}
export const Container: React.FC<ContainerProps> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.page_background,
  },
});
