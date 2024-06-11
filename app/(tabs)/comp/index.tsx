import { useState } from "react"
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native"

const dataCard = [
  {
    id: 1,
    title: "something",
    description: "something went wrong",
    color: "#FF204E",
  },
  {
    id: 2,
    title: "something 2",
    description: "something went wrong",
    color: "#F97300",
  },
  {
    id: 3,
    title: "something 3",
    description: "something went wrong",
    color: "#610C9F",
  },
  {
    id: 4,
    title: "something",
    description: "something went wrong",
    color: "#FF204E",
  },
  {
    id: 5,
    title: "something 2",
    description: "something went wrong",
    color: "#F97300",
  },
  {
    id: 6,
    title: "something 3",
    description: "something went wrong",
    color: "#610C9F",
  },
  {
    id: 7,
    title: "something",
    description: "something went wrong",
    color: "#FF204E",
  },
  {
    id: 8,
    title: "something 2",
    description: "something went wrong",
    color: "#F97300",
  },
  {
    id: 9,
    title: "something 3",
    description: "something went wrong",
    color: "#610C9F",
  },
]

const CompTesting = () => {
  const [value, setValue] = useState<string>("")
  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
      <View style={styles.container}>
        <ValueComp value={value} />
        <TextInput
          style={styles.input}
          placeholder="text input..."
          onChangeText={setValue}
        />
        <Button
          color="#000000"
          title="click me"
          onPress={() => setValue("just button")}
        />
        <TouchableHighlight onPress={() => setValue("touchable highlight")}>
          <Text>touchable highlight</Text>
        </TouchableHighlight>
        <TouchableOpacity onPress={() => setValue("touchable opacity")}>
          <Text>touchable opacity</Text>
        </TouchableOpacity>
        <View style={styles.wrapper}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            bounces={true}
          >
            {dataCard?.map((data) => (
              <View
                key={data.id}
                style={[
                  styles.card,
                  {
                    backgroundColor: data.color,
                  },
                ]}
              >
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.paragraph}>{data.description}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.wrapper}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            bounces={true}
          >
            {dataCard?.map((data) => (
              <View
                key={data.id}
                style={[
                  styles.card,
                  {
                    backgroundColor: data.color,
                  },
                ]}
              >
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.paragraph}>{data.description}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.wrapper}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            bounces={true}
          >
            {dataCard?.map((data) => (
              <View
                key={data.id}
                style={[
                  styles.card,
                  {
                    backgroundColor: data.color,
                  },
                ]}
              >
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.paragraph}>{data.description}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.wrapper}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            bounces={true}
          >
            {dataCard?.map((data) => (
              <View
                key={data.id}
                style={[
                  styles.card,
                  {
                    backgroundColor: data.color,
                  },
                ]}
              >
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.paragraph}>{data.description}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.wrapper}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            bounces={true}
          >
            {dataCard?.map((data) => (
              <View
                key={data.id}
                style={[
                  styles.card,
                  {
                    backgroundColor: data.color,
                  },
                ]}
              >
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.paragraph}>{data.description}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.wrapper}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            bounces={true}
          >
            {dataCard?.map((data) => (
              <View
                key={data.id}
                style={[
                  styles.card,
                  {
                    backgroundColor: data.color,
                  },
                ]}
              >
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.paragraph}>{data.description}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.wrapper}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            bounces={true}
          >
            {dataCard?.map((data) => (
              <View
                key={data.id}
                style={[
                  styles.card,
                  {
                    backgroundColor: data.color,
                  },
                ]}
              >
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.paragraph}>{data.description}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  )
}

export default CompTesting

const ValueComp = ({ value }: { value: string }) => {
  return (
    <View style={styles.container__value}>
      <Text style={styles.text__value}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    padding: 6,
    marginTop: 20,
  },
  wrapper: {
    padding: 4,
  },
  input: {
    width: "100%",
    maxWidth: 400,
    marginHorizontal: "auto",
    borderRadius: 100 / 2,
    borderWidth: 1,
    borderColor: "#000000",
    paddingHorizontal: 20,
    paddingVertical: 4,
    color: "#000000",
  },
  card: {
    width: 150,
    aspectRatio: 3 / 2,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: "#000000",
    padding: 4,
    display: "flex",
    flexDirection: "column",
    gap: 3,
    marginRight: 10,
  },
  title: {
    fontSize: 30,
    color: "#000000",
  },
  paragraph: {
    fontSize: 16,
    color: "#000000",
  },
  //
  container__value: {
    width: "100%",
    paddingVertical: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#000000",
  },
  text__value: {
    color: "#FF204E",
  },
})
