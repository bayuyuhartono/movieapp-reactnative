import React, { FC } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import ROUTES from '../../config/routes'
import { MainBottomTabScreenProps } from '../../Navigation/MainBottomTabNavigator/types'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = MainBottomTabScreenProps<ROUTES.HOME>

const HomeScreen: FC<Props> = ({  }) => {
  const imageUrl = 'https://i.pinimg.com/originals/ff/f0/48/fff048ee17b6f31ff1db49df8f62b89a.jpg'

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Test</Text>
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: imageUrl }}
          resizeMode='contain'
          resizeMethod='resize'
          style={styles.image}
        />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: 'white',
  },
  imageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
})
