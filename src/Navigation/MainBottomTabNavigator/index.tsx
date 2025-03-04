import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MainBottomTabParamList, Props } from './types'
import ROUTES from '../../config/routes'
import HomeScreen from '../../Screen/HomeScreen'
import SearchScreen from '../../Screen/SearchScreen'
import ProfileScreen from '../../Screen/ProfileScreen'

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>()

export const MainBottomTabNavigator: FC<Props> = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name={ROUTES.SEARCH}
        component={SearchScreen}
        options={{
          title: 'Search',
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name={ROUTES.PROFILE}
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  )
}

