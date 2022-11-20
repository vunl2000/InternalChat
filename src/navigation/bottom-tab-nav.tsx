import {Icon} from '@components';
import {SCREENS} from '@constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Contact, Home, Profile, TheHight} from '@screens';
import {colors, fonts, fontSizes} from '@styles';
import React from 'react';
import {IS_IOS} from '../constants/constants';

const TabStack = createBottomTabNavigator();

export const BottomTabNavigator: React.FC = () => {
  return (
    <TabStack.Navigator
      backBehavior="none"
      initialRouteName={SCREENS.HOME}
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 0,
          height: IS_IOS ? 80 : 60,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: fontSizes.small,
          fontFamily: fonts.medium,
          marginBottom: IS_IOS ? 20 : 0,
        },
      })}>
      <TabStack.Screen
        name={SCREENS.HOME}
        component={Home}
        options={{
          tabBarActiveTintColor: colors.primary,
          tabBarLabel: 'Trò chuyện',
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              type={'ionicon'}
              name={'chatbubble-ellipses'}
              size={size}
              color={focused ? colors.primary : colors.secondary_text}
            />
          ),
        }}
      />
      <TabStack.Screen
        name={SCREENS.CONTACT}
        component={Contact}
        options={{
          tabBarActiveTintColor: colors.primary,
          tabBarLabel: 'bạn tốt',
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              type={'ant-design'}
              name={'contacts'}
              size={size}
              color={focused ? colors.primary : colors.secondary_text}
            />
          ),
        }}
      />
      <TabStack.Screen
        name={SCREENS.THE_HIGHT}
        component={TheHight}
        options={{
          tabBarActiveTintColor: colors.primary,
          tabBarLabel: 'THE HIGHT',
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              type={'ionicon'}
              name={'ios-recording-outline'}
              size={size}
              color={focused ? colors.primary : colors.secondary_text}
            />
          ),
        }}
      />
      <TabStack.Screen
        name={SCREENS.PROFILE}
        component={Profile}
        options={{
          tabBarActiveTintColor: colors.primary,
          tabBarLabel: 'của tôi',
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              type={'ionicon'}
              name={'person'}
              size={size}
              color={focused ? colors.primary : colors.secondary_text}
            />
          ),
        }}
      />
    </TabStack.Navigator>
  );
};
