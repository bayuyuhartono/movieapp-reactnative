import React, { FC } from 'react'
import { Button, Text } from 'react-native'
import ROUTES from '../../config/routes'
import { MainBottomTabScreenProps } from '../../Navigation/MainBottomTabNavigator/types'

type Props = MainBottomTabScreenProps<ROUTES.HOME>

const HomeScreen: FC<Props> = ({ navigation }) => {
  return (
    <>
      <Text>Home Screen</Text>
      <Button onPress={() => {
        navigation.navigate(ROUTES.MAIN_NAVIGATOR, {
          screen: ROUTES.MOVIE_DETAIL,
        })
      }} title='Go to Movie Detail' />
    </>
  )
}

export default HomeScreen
