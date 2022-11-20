import {useKeyboard} from '@hooks';
import {RootNavigator} from '@navigation';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import FlashMessage from 'react-native-flash-message';

import {Container, Loading} from '@components';
import {RootState} from '@redux';
import {useSelector} from 'react-redux';

const App = () => {
  useKeyboard();

  const loading = useSelector(
    (state: RootState) => state.app.loading,
  ) as boolean;

  return (
    <>
      <NavigationContainer>
        <Container>
          <RootNavigator />
          {loading && <Loading />}
        </Container>
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};

export default App;
