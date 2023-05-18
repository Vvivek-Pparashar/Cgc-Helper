import { Skeleton } from "@rneui/base";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView } from "react-native";
import { StyleSheet, View } from "react-native";

const SingleItemSkeleton = () => {
  return (
    <ScrollView>
      <View style={styles.ic_m}>
        <View style={styles.ic_m_l}>
          <Skeleton
            height={290}
            width={290}
            LinearGradientComponent={LinearGradient}
            animation="wave"
          />
        </View>

        <View style={styles.ic_m_r}>
          <Skeleton width={"100%"} height={50} />
          <Skeleton width={"100%"} height={30} />
          <Skeleton width={"100%"} height={30} />

          <Skeleton width={"50%"} height={30} />
          <Skeleton width={"70%"} height={20} />
          <Skeleton width={"70%"} height={20} />
          <Skeleton width={"70%"} height={20} />

          <Skeleton width={"100%"} height={35} style={{ marginTop: 15 }} />
          <Skeleton width={"70%"} height={25} style={{ marginTop: 0 }} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ic_m: {
    paddingHorizontal: 20,
    paddingTop: 30,
    gap: 20,
    paddingBottom: 30,
  },

  ic_m_l: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },

  ic_m_r: { display: "flex", gap: 15, paddingLeft: 20, paddingRight: 20 },
});

export default SingleItemSkeleton;
