import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types'
import ROUTES from '../../config/routes'
import { MainNavigatorParamsList } from '../MainNavigator/types'
import { NavigatorScreenParams } from '@react-navigation/native'

export type MainBottomTabParamList = {
  [ROUTES.HOME]?: undefined
  [ROUTES.SEARCH]: undefined
  [ROUTES.PROFILE]: undefined
  [ROUTES.MAIN_NAVIGATOR]: NavigatorScreenParams<MainNavigatorParamsList>
}

export type MainBottomTabScreenProps<T extends keyof MainBottomTabParamList> =
  BottomTabScreenProps<MainBottomTabParamList, T>

export type Props = NativeStackScreenProps<RootStackParamList, ROUTES.MAIN_APP>
