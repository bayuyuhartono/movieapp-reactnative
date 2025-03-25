import * as React from 'react'
import { DarkTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './types'
import ROUTES from '../config/routes'
import { MainBottomTabNavigator } from './main_bottom_tab_navigator'
import { MainNavigator } from './main_navigator'

const RootNavigator = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>()

  return (
    <NavigationContainer theme={DarkTheme}>
      <RootStack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
        <RootStack.Screen
          name={ROUTES.MAIN_APP}
          component={MainBottomTabNavigator}
        />
        <RootStack.Screen
          name={ROUTES.MAIN_NAVIGATOR}
          component={MainNavigator}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator

