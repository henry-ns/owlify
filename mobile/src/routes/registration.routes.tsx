import React from 'react';
import { useTheme } from 'styled-components/native';

import { createStackNavigator } from '@react-navigation/stack';

// import HeaderLeftButton from '@atoms/HeaderLeftButton';

import GatewayRegistration from '@pages/GatewayRegistration';
import Registration from '@pages/Registration';

const { Navigator, Screen } = createStackNavigator();

const RegistrationRoutes: React.FC = () => {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        // headerStatusBarHeight: 8,
        headerTintColor: theme.colours.active,
        headerStyle: {
          backgroundColor: theme.colours.background,
          elevation: 0,
        },
        headerTitleStyle: {
          fontFamily: theme.fonts.bold,
          letterSpacing: 2,
        },
        // headerLeft: (props) => <HeaderLeftButton {...props} />,
      }}
    >
      <Screen
        name="Choose"
        component={Registration}
        options={{ title: 'Registration' }}
      />
      <Screen
        name="GatewayRegistration"
        component={GatewayRegistration}
        options={{ title: '' }}
      />
    </Navigator>
  );
};

export default RegistrationRoutes;