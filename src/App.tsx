import React from 'react';

import {Provider} from 'react-redux';
import store from '../store/index';

// import AppNavigator from '../navigation/AppNavigator';
import Tabs from '../navigation/TabNavigator';

// import NewPasswordScreen from './screens/NewPasswordScreen';
// import CreateAccountScreen from './screens/CreateAccountScreen';
// import FaceAuthScreen from './screens/FaceAuthScreen';
// import SignInScreen from './screens/SignInScreen';
// import VerificationCodeScreen from './screens/VerificationCodeScreen';
// import CreateAccountInfoScreen from './screens/CreateAccountInfoScreen/index';
// import ForgotPasswordScreen from './screens/ForgotPasswordScreen/index';
// import SuccessfulScreen from './screens/SuccesfulScreen/index';
// import SplashScreen from './screens/SignScreens/SplashScreen/index';

const App = () => {
  return (
    <Provider store={store}>
      <Tabs />
      {/* <AppNavigator /> */}
    </Provider>
  );
};

export default App;
