import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

// import styles from './styles';

import PointsScreen from './points';
import Ranking from './ranking';
import Score from './score';
// import Footer from './footer';

const Navigator = TabNavigator(
  {
    Home: { screen: Ranking },
    Score: { screen: Score },
    Points: { screen: PointsScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Score') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        } else if (routeName === 'Points') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  }
);

export default Navigator;
