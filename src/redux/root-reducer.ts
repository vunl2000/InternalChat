import {combineReducers} from '@reduxjs/toolkit';

import appReducer from './slices/app.slice';
import userReducer from './slices/user.slice';

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
