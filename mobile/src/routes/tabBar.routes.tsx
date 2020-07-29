import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from '@molecules/TabBar';

import Dashboard from '@pages/Dashboard';
import List from '@pages/List';
// import Notifications from '@pages/Notifications';

const { Navigator, Screen } = createBottomTabNavigator();

// const iconNames = ['home', 'list', 'plus', 'bell', 'user'];
const iconNames = ['home', 'plus', 'user'];

const TabBarRoutes: React.FC = () => {
  return (
    <Navigator
      tabBar={(props) => <TabBar {...props} iconNames={iconNames} />}
      initialRouteName="List"
    >
      <Screen name="Dashboard" component={List} />
      {/* <Screen name="List" component={List} /> */}
      <Screen name="@temporary" component={Dashboard} />
      {/* <Screen name="Notifications" component={Notifications} /> */}
      <Screen name="Profile" component={Dashboard} />
    </Navigator>
  );
};

export default TabBarRoutes;
