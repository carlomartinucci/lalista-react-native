import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Ranking from '../screens/Ranking';
import Score from '../screens/Score';
import Points from '../screens/Points';

import { tintColors } from './styles';

export const Tabs = TabNavigator(
  {
    Ranking: { screen: Ranking },
    Score: { screen: Score },
    Points: { screen: Points },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Ranking') {
          iconName = 'view-list';
        } else if (routeName === 'Score') {
          iconName = 'add';
        } else if (routeName === 'Points') {
          iconName = 'history';
        }

        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: tintColors,
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  }
);

export default Tabs;
