import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Hero from "./components/Hero";
import BottomUp from "./components/BottomUp";
import Semester from "./components/Semester";
import SemData from "./components/SemData";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.navbar}>
        <Text style={{ fontWeight: "bold", fontSize: 30, marginLeft: 15, color:"white" }}>
          CGC <Text style={{color:"black"}}>Helper</Text>
        </Text>
        <Image source={require("./assets/avatar.png")} style={{width:50, height:50, borderRadius:30}}/>
      </View>

      <Stack.Navigator initialRouteName="Hero">
        <Stack.Screen
          name="Hero"
          component={Hero}
          options={{ headerShown: false, animation: "none" }}
        />
        <Stack.Screen
          name="Semester"
          component={Semester}
          options={{ headerShown: false, animation: "none" }}
        />
        <Stack.Screen
          name="Data"
          component={SemData}
          options={{ headerShown: false, animation: "none" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 100,
    flexDirection: "row",
    backgroundColor: "#296cee",
    shadowColor: "#000",
    paddingRight: 15,
    paddingTop: 30,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "white",
  },
});

export default App;
