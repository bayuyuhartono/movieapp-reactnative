import { NativeStackScreenProps } from '@react-navigation/native-stack'
import ROUTES from '../../config/routes'
import { RootStackParamList } from '../types'

export type MainNavigatorParamsList = {
    [ROUTES.MOVIE_DETAIL]: undefined
}

export type MainNavigatorScreenProps<T extends keyof MainNavigatorParamsList> =
  NativeStackScreenProps<MainNavigatorParamsList, T>

export type Props = NativeStackScreenProps<RootStackParamList, ROUTES.MAIN_NAVIGATOR>
