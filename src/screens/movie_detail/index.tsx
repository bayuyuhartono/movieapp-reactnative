import React, { FC } from 'react'
import { Text } from 'react-native'
import ROUTES from '../../config/routes'
import { MainNavigatorScreenProps } from '../../navigation/MainNavigator/types'

type Props = MainNavigatorScreenProps<ROUTES.MOVIEDETAIL>

const MovieDetailScreen: FC<Props> = () => {
  return (
    <>
      <Text>Movie Detail Screen</Text>
    </>
  )
}

export default MovieDetailScreen
