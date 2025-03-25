import React, { FC } from 'react'
import { StyleSheet, Text } from 'react-native'
import ROUTES from '../../config/routes'
import { MainBottomTabScreenProps } from '../../navigation/main_bottom_tab_navigator/types'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategoryList from '../components/category_list'

type Props = MainBottomTabScreenProps<ROUTES.HOME>

const HomeScreen: FC<Props> = ({  }) => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Movie App</Text>
      <CategoryList />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: 'white',
  },
})
