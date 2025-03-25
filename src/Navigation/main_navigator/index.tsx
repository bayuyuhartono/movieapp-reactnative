import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainNavigatorParamsList } from './types'
import { Props } from '../types'
import { FC } from 'react'
import ROUTES from '../../config/routes'
import MovieDetailScreen from '../../screen/MovieDetail'

const Stack = createNativeStackNavigator<MainNavigatorParamsList>()

export const MainNavigator: FC<Props> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.MOVIE_DETAIL}
        component={MovieDetailScreen}
        options={{ title: 'Movie Detail' }}
      />
    </Stack.Navigator>
  )
}
