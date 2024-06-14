import { COLORS } from "@/constants/colors"
import { Image, ScrollView, StyleSheet, View } from "react-native"

const images = [
  { image: require("../assets/images/neo2.jpg") },
  { image: require("../assets/images/neo2.jpg") },
  { image: require("../assets/images/neo2.jpg") },
  { image: require("../assets/images/neo2.jpg") },
]

const ListImage = () => {
  return (
    <ScrollView horizontal bounces showsHorizontalScrollIndicator={false}>
      {images.map(({ image }, idx) => (
        <View style={[styles.card, idx === 0 && styles.firstCard]} key={idx}>
          <Image source={image} alt="imagesss" style={styles.image} />
        </View>
      ))}
    </ScrollView>
  )
}

export default ListImage

const styles = StyleSheet.create({
  card: {
    padding: 4,
    borderRadius: 10,
    backgroundColor: COLORS.foregroundAccent,
    width: 300,
    aspectRatio: 16 / 9,
    marginRight: 10,
    overflow: "hidden",
  },
  firstCard: {
    marginLeft: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 10,
  },
})
