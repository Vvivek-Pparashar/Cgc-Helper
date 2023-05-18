import * as React from "react";
import { Image, TouchableWithoutFeedback } from "react-native";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const CardStuff = ({ navigation, data, link }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.cardcont}>
        {data.map((item) => {
          return (
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate(link, {
                  course: item.name,
                })
              }
            >
              <View style={styles.card(item.bgColor)} key={item.name}>
                <Image
                  source={item.url}
                  style={{ width: "100%", height: 110, marginBottom: 20 }}
                />
                <Text style={styles.cardFont}>Explore</Text>
                <Text style={styles.cardFont}>{item.name}</Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardcont: {
    display: "flex",
    gap: 20,
    flexDirection: "row",
    marginLeft: 15,
    marginTop: 20,
    marginRight: 15,
  },
  card(bgColor) {
    return {
      width: 300,
      height: 320,
      borderRadius: 30,
      padding: 30,
      justifyContent: "flex-start",
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: bgColor,
      display: "flex",
      alignItems: "center",
    };
  },

  cardFont: {
    fontSize: 30,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
});
export default CardStuff;
