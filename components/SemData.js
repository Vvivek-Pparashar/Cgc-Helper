import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  Linking,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { assignData, selectData } from "../utils/assignData";
import { FontAwesome5 } from "@expo/vector-icons";

const URL = "https://reactnativeforyou.com";

const SemData = ({ route }) => {
  const sem = route.params.sem;
  const course = route.params.course;

  const data = selectData(course, sem).data

  console.log(data)

  return (
    <SafeAreaView>
     
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 20 , padding:20, display:"flex", gap: 80}}>
          {data.map((e) => {
            return (
              <View key={e.heading}>
                <Text style={{ fontSize: 40, fontWeight: "900", marginBottom:10 }}>
                  {e.heading}
                </Text>
                <View style={{ display: "flex", gap: 40, marginTop: 20 }}>
                  {e.data.map((i) => {
                    return (
                      <View>
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: "600",
                            marginBottom: 15,
                          }}
                        >
                          {i.subHead}
                        </Text>
                        <View style={{ display: "flex", gap: 15 }}>
                          {i.data.map((j) => {
                            return (
                              <TouchableOpacity
                                onPress={() => Linking.openURL(j.nameLink)}
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  gap: 10,
                                  alignItems: "center",
                                  paddingLeft: 20,
                                }}
                              >
                                <View
                                  style={{
                                    width: 50,
                                    height: 0.4,
                                    backgroundColor: "black",
                                  }}
                                ></View>
                                <FontAwesome5
                                  name="file-pdf"
                                  size={24}
                                  color="red"
                                />
                                <Text
                                  style={{ fontSize: 15, fontWeight: "400" }}
                                >
                                  {j.name}
                                </Text>
                              </TouchableOpacity>
                            );
                          })}
                        </View>
                      </View>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SemData;
