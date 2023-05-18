import React from "react";
import { ScrollView, View } from "react-native";
import BottomUp from "./BottomUp";
import SellerSeleton from "./skeleton/SellerSeleton";

const SellerComp = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 20,
            justifyContent: "space-between",
          }}
        >
          <SellerSeleton />
        </View>
      </ScrollView>
      <BottomUp />
    </View>
  );
};

export default SellerComp;
