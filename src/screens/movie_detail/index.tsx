import React, { FC } from 'react'
import { Text } from 'react-native'
import ROUTES from '../../config/routes'
import { MainNavigatorScreenProps } from '../../navigation/main_navigator/types'

type Props = MainNavigatorScreenProps<ROUTES.MOVIE_DETAIL>

const MovieDetailScreen: FC<Props> = () => {
  return (
    <>
      <Text>Movie Detail Screen</Text>
    </>
  )
}

export default MovieDetailScreen
