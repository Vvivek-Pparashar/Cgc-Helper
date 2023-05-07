import * as React from "react";
import { Button, Image, TouchableWithoutFeedback } from "react-native";
import { Text, StyleSheet, View, ScrollView } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { sem } from "../utils/data";
const Stack = createNativeStackNavigator();

const Semester = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1,  }}>
      <Text style={{fontSize:25, padding:20, paddingBottom:10}}>Select Your Semester : </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ display: "flex", gap: 20, padding:20, paddingTop:10 }}>
          {sem.map((e) => {
            return (
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate("Data", {
                    course: route.params.course,
                    sem: e.linkTo,
                  })
                }
              >
                <View style={styles.card}>
                  <Image
                    source={e.img}
                    style={{ height: 50, width: 50 }}
                  />
                  <Text style={styles.cardFont}>{e.name} sem</Text>
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 100,
    borderRadius: 10,
    backgroundColor:"#00a3e9",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    padding: 20,
  },

  cardFont: {
    fontSize: 30,
    fontWeight: "600",
    color: "white",
  },
});
export default Semester;
