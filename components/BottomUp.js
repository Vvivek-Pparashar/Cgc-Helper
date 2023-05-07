import React from "react";
import BottomSheet from "react-native-simple-bottom-sheet";
import { Text, View, StyleSheet, Button } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const BottomUp = ({navigation}) => {
  return (
    <BottomSheet isOpen={false} wrapperStyle={{ backgroundColor: "gray" }}>
      <Button onPress={() => navigation.navigate("Dnt")} title="vivek" />
      <Text style={styles.btmupfnt}>Vivek</Text>
      <Text style={styles.btmupfnt}>Vivek</Text>
      <Text style={styles.btmupfnt}>Vivek</Text>
      <Text style={styles.btmupfnt}>Vivek</Text>
      <Text style={styles.btmupfnt}>Vivek</Text>
      <Text style={styles.btmupfnt}>Vivek</Text>
      <Text style={styles.btmupfnt}>Vivek</Text>
      <Text style={styles.btmupfnt}>Vivek</Text>
      <Text style={styles.btmupfnt}>Vivek</Text>
      <Text style={styles.btmupfnt}>Vivek</Text>
      <Text style={styles.btmupfnt}>Vivek</Text>

      <View style={{ padding: 20 }} />
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  btmupfnt: {
    color: "white",
    fontSize: 30,
    paddingEnd: 10,
  },
});

export default BottomUp;
