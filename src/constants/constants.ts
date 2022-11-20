import {Dimensions, NativeModules, Platform} from 'react-native';
const {StatusBarManager} = NativeModules;
export const STATUS_BAR_HEIGHT = StatusBarManager.HEIGHT;
export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

export const IS_ANDROID = Platform.OS == 'android';
export const IS_IOS = Platform.OS == 'ios';

export const HEIGHT_INPUT = 40;
export const RADIUS_INPUT = 20;
export const BASE_PADDING = 20;
