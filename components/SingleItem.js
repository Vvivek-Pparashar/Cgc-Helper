import axios from "axios";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Linking } from "react-native";
import { StyleSheet } from "react-native";
import { Image, Text, View } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import { ScrollView } from "react-native";
import SingleItemSkeleton from "./skeleton/SingleItemSkeleton";

const SingleItem = ({ route, navigation }) => {
  const id = route.params.id;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://cgc-seller-server.vercel.app/api/products/${id}`)
      .then((res) => {
        setData({ ...res.data.product });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const ownerData = [
    {
      id: "Name",
      value: data.name,
    },
    {
      id: "Phone No",
      value: `+91 ${data.phoneNo}`,
    },
    {
      id: "Email",
      value: data.email,
    },
  ];

  const initiateWhatsApp = () => {
    let url =
      "whatsapp://send?text=" +
      `Hello ${data.name} 👋👋, I want to enquire about your product\ntitle : ${data.title}\nprice : ₹ ${data.price}\non CGC Seller.` +
      "&phone=91" +
      data.phoneNo;
    Linking.openURL(url)
      .then((data) => {
        console.log("WhatsApp Opened");
      })
      .catch(() => {
        alert("Make sure Whatsapp installed on your device");
      });
  };

  return loading ? (
    <SingleItemSkeleton/>
  ) : (
    <ScrollView>
      <View style={styles.ic_m}>
        <View style={styles.ic_m_l}>
          <Image source={{ uri: data.img }} style={styles.ic_m_l_img} />
        </View>

        <View style={styles.ic_m_r}>
          <Text style={{ fontSize: 40, fontWeight: "600" }}>{data.title}</Text>

          <View style={styles.ic_m_r_pc}></View>

          <View style={styles.ic_m_r_pc}>
            <Text style={styles.ic_m_r_h4}>Price : </Text>
            <Text style={styles.ic_m_r_s_p}>₹ {data.price}</Text>
          </View>

          <View style={styles.ic_m_r_pc}>
            <Text style={styles.ic_m_r_h4}>Category : </Text>
            <Text style={styles.ic_m_r_s_p}>{data.category}</Text>
          </View>

          <Text style={styles.ic_m_r_h4}>Owner Detail's : </Text>

          <View style={{ display: "flex", gap: 1, paddingLeft: 30 }}>
            {ownerData.map((e) => {
              return (
                <View style={styles.ic_m_r_li}>
                  <Text style={styles.ic_m_r_h5}>• {e.id} : </Text>
                  <Text style={{ fontSize: 16 }}>{e.value}</Text>
                </View>
              );
            })}
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={initiateWhatsApp}
          >
            <Image
              source={require("../assets/chat.gif")}
              style={{ width: 25, height: 25 }}
            />
            <Text style={styles.buttonTextStyle}>Chat Now</Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              justifyContent: "flex-start",
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
              onPress={() => {
                navigation.navigate("Seller");
              }}
            >
              <AntIcon name="arrowleft" color="#128C7E" size={30} />
              <Text style={{ color: "#128C7E", fontSize: 17 }}>
                Go To Products
              </Text>
            </TouchableOpacity>
          </View>
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

  ic_m_l_img: {
    width: 290,
    height: 290,
  },

  ic_m_r: { display: "flex", gap: 5, paddingLeft: 20 },

  ic_m_r_pc: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  ic_m_r_h4: {
    fontSize: 24,
    fontWeight: "600",
  },

  ic_m_r_s_p: {
    fontSize: 20,
  },

  ic_m_r_h5: {
    fontSize: 20,
    fontWeight: "600",
  },

  ic_m_r_li: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  buttonStyle: {
    justifyContent: "center",
    marginTop: 15,
    padding: 10,
    backgroundColor: "#128C7E",
    borderRadius: 20,
    gap: 10,
    flexDirection: "row",
  },
  buttonTextStyle: {
    fontSize: 17,
    color: "#fff",
    textAlign: "center",
  },
});

export default SingleItem;
