import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import BottomUp from "./BottomUp";
import SellerSeleton from "./skeleton/SellerSeleton";
import axios from "axios";
import { StyleSheet } from "react-native";

const SellerComp = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://cgc-seller-server.vercel.app/api/products")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => {
        console.log(err);
      });
  }, []);

  //   console.log(data);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
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
          {loading ? (
            <SellerSeleton />
          ) : (
            data.map((e) => {
              return (
                <TouchableWithoutFeedback
                  onPress={() =>
                    navigation.navigate(`SingleItem`, {
                      id: e._id,
                    })
                  }
                >
                  <View
                    style={{
                      display: "flex",
                      gap: 10,
                      width: "47%",
                      backgroundColor: "white",
                      marginBottom: 30,
                      shadowColor: "black",
                      shadowOpacity: 1,
                      shadowOffset: { width: 3, height: 4 },
                      shadowRadius: 10,
                      elevation: 15,
                      backgroundColor: "white",
                      borderRadius: 8,
                      justifyContent: "center",
                      alignItems: "center",
                      paddingBottom: 15,
                    }}
                  >
                    <Image
                      source={{ uri: e.img }}
                      style={{
                        width: "100%",
                        height: 150,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                      }}
                    />
                    <Text style={{ fontSize: 18, fontWeight: "600" }}>
                      {e.title}
                    </Text>
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        width: "100%",
                        paddingHorizontal: 20,
                      }}
                    >
                      <Text style={{ fontSize: 16 }}>₹ {e.price}</Text>
                      <Text style={{ fontSize: 16 }}>{e.category}</Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              );
            })
          )}
        </View>
      </ScrollView>
      {/* <BottomUp /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 13,
  },
  card: {
    backgroundColor: "#0000",
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: "100%",
    marginVertical: 10,
    width: 300,
    marginLeft: 40,
  },
  shadowProp: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: "white",
  },
});
export default SellerComp;
