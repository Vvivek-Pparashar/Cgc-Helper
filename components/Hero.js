import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import BottomUp from "./BottomUp";
import CardStuff from "./CardStuff";
import { sellerData, assignementData } from "../utils/data";

function Hero({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.comp}>Assignement</Text>
          <CardStuff navigation={navigation} data={assignementData} />

          <Text style={styles.comp}>Seller</Text>
          <CardStuff data={sellerData} />

          <View style={{ padding: 40 }}></View>
        </ScrollView>
      </SafeAreaView>

      {/* <BottomUp navigation={navigation} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  comp: { fontWeight: "bold", fontSize: 30, marginLeft: 15, marginTop: 30 },
});

export default Hero;
