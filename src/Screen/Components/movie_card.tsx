import { Image, StyleSheet, Text, View } from 'react-native'

interface movieList {
  title: string,
  image: string,
}

const MovieCard = ({ item } : {item: movieList}) => (
  <View style={styles.container}>
    <Image
      source={{ uri: item.image }}
      resizeMode='cover'
      resizeMethod='resize'
      style={styles.image}
    />
    <Text style={styles.titleText}>{item.title}</Text>
  </View>
)

export default MovieCard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: 200,
    width: 130,
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'semibold',
    textAlign: 'center',
    marginTop: 8,
    color: 'white',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
  },
})
