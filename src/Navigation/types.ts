import { NavigatorScreenParams } from '@react-navigation/native'

import ROUTES from '../config/routes'
import { MainBottomTabParamList } from './MainBottomTabNavigator/types'
import { MainNavigatorParamsList } from './MainNavigator/types'

export type RootStackParamList = {
  [ROUTES.MAIN_APP]: NavigatorScreenParams<MainBottomTabParamList>
  [ROUTES.MAIN_NAVIGATOR]: NavigatorScreenParams<MainNavigatorParamsList>
}

export type Props = {}
