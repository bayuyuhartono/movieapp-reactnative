import { FlatList, StyleSheet } from 'react-native'
import MovieCard from './movie_card'



const CategoryList = () => {

  const DUMMYDATA = [
    {
      title: 'John Wick',
      image: 'https://i.pinimg.com/originals/ff/f0/48/fff048ee17b6f31ff1db49df8f62b89a.jpg',
    },
    {
      title: 'Wolverine',
      image: 'https://lumiere-a.akamaihd.net/v1/images/tayang_tidalwave_fight_localized_742x1100_da1d8b60.jpeg',
    },
    {
      title: 'Abigail',
      image: 'https://thathashtagshow.com/wp-content/uploads/2024/08/Abigail-Poster-691x1024.jpg',
    },
    {
      title: 'Zodiac',
      image: 'https://upload.wikimedia.org/wikipedia/id/8/8a/Zodiac32432.jpg',
    },
  ]

  return (
    <FlatList
      contentContainerStyle={styles.container}
      horizontal={true}
      data={DUMMYDATA}
      renderItem={MovieCard}
      keyExtractor={(item) => item.title}
    />
  )
}

export default CategoryList

const styles = StyleSheet.create({
  container: {
    gap: 16,
    paddingVertical: 8,
  },
})
