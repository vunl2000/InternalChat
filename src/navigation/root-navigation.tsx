import {SCREENS} from '@constants';

import {
  AddFriend,
  ChangePassword,
  Chat,
  EditInfor,
  FriendRequest,
  Home,
  MyMoney,
  Setting,
  SignIn,
  SignUp,
} from '@screens';

import {RootState} from '@redux';
import {useSelector} from 'react-redux';
import {BottomTabNavigator} from './bottom-tab-nav';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
export const RootNavigator = () => {
  const checkAuth = useSelector((state: RootState) => state.user.isLogin);
  return (
    <Stack.Navigator
      initialRouteName={checkAuth ? SCREENS.BOTTOM_TAB : SCREENS.SIGN_IN}
      screenOptions={{headerShown: false, gestureEnabled: true}}>
      <Stack.Screen name={SCREENS.SIGN_IN} component={SignIn} />
      <Stack.Screen name={SCREENS.SIGN_UP} component={SignUp} />
      <Stack.Screen name={SCREENS.BOTTOM_TAB} component={BottomTabNavigator} />
      <Stack.Screen name={SCREENS.HOME} component={Home} />
      <Stack.Screen name={SCREENS.CHAT} component={Chat} />
      <Stack.Screen name={SCREENS.CHANGE_PASSWORD} component={ChangePassword} />
      <Stack.Screen name={SCREENS.SETTING} component={Setting} />
      <Stack.Screen name={SCREENS.EDIT_INFOR} component={EditInfor} />
      <Stack.Screen name={SCREENS.ADD_FRIEND} component={AddFriend} />
      <Stack.Screen name={SCREENS.FRIEND_REQUEST} component={FriendRequest} />
      <Stack.Screen name={SCREENS.MY_MONEY} component={MyMoney} />
    </Stack.Navigator>
  );
};
