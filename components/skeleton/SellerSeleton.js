import { Skeleton } from "@rneui/themed";
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
        }}
      >
        <Skeleton width={"100%"} height={150} />
        <Skeleton width={"100%"} height={40} animation="pulse" />
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Skeleton width={"45%"} height={30} />
          <Skeleton width={"45%"} height={30} />
        </View>
      </View>
    );
  });
};

export default SellerSeleton;
