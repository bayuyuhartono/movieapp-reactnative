import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './types'
import ROUTES from '../config/routes'
import { MainBottomTabNavigator } from './MainBottomTabNavigator'
import { MainNavigator } from './MainNavigator'

const RootNavigator = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>()

  return (
    <NavigationContainer>
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

