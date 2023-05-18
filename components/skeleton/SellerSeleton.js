import { Skeleton } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View } from "react-native";

const SellerSeleton = () => {
  return [1, 1, 1, 1, 1, 1].map((e) => {
    return (
      <View
        style={{
          display: "flex",
          gap: 10,
          width: "47%",
          marginBottom: 30,
          shadowColor: "black",
          shadowOpacity: 1,
          shadowOffset: { width: 3, height: 4 },
          shadowRadius: 10,
          elevation: 20,
          backgroundColor: "white",
          padding: 5,
        }}
      >
        <Skeleton
          width={"100%"}
          height={150}
          animation="wave"
          LinearGradientComponent={LinearGradient}
        />
        <Skeleton
          width={"100%"}
          height={40}
          LinearGradientComponent={LinearGradient}
        />
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Skeleton
            width={"45%"}
            height={30}
            LinearGradientComponent={LinearGradient}
          />
          <Skeleton
            width={"45%"}
            height={30}
            LinearGradientComponent={LinearGradient}
          />
        </View>
      </View>
    );
  });
};

export default SellerSeleton;
