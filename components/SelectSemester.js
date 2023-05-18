import * as React from "react";
import {
  Button,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import { Text, StyleSheet, View, ScrollView } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { sem } from "../utils/data";
import { TouchableHighlightComponent } from "react-native";
import { useState } from "react";
const Stack = createNativeStackNavigator();

const SelectSemester = ({ navigation, route }) => {
  const [loader, setLoader] = useState(false);
  React.useEffect(()=>{
    setLoader(false)
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 25, padding: 20, paddingBottom: 10 }}>
        Select Your Semester :{" "}
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ display: "flex", gap: 20, padding: 20, paddingTop: 10 }}>
          {sem.map((e) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  // setLoader(true);
                  navigation.navigate("Data", {
                    course: route.params.course,
                    sem: e.linkTo,
                  });

                  // setLoader(false)
                }}
              >
                <View style={styles.card}>
                  <Image source={e.img} style={{ height: 50, width: 50 }} />
                  <Text style={styles.cardFont}>{e.name} sem</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      {/* {loader ? <View style={{width:100, height:100, backgroundColor:"red"}}></View> : ""} */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 100,
    borderRadius: 10,
    backgroundColor: "#00a3e9",
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
export default SelectSemester;
