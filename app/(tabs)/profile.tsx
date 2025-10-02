import React from "react";

import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function TabTwoScreen() {
  return (
    <View style={styles.contaier}>
        <View style={[styles.groundBox,{position:"absolute",top:"3%"}]}>
          <Image
            source={require("../../assets/images/icon-profile.png")}
            style={styles.imageAvatar}
          />
          <Text style={styles.textImage}>Nguyễn Văn B</Text>
          <Text style={styles.textImage}>Số Dư: 10.000đ</Text>
        </View>
        <View style={[styles.groundBox,{position:"absolute",bottom:"2%"}]}>
          <Pressable
            style={styles.buttonLogout}
          >
            <Text style={styles.textImage}>Đăng Xuất</Text>
          </Pressable>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contaier: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    // justifyContent:'center',
    alignItems: "center",
    padding: "5%",
    position:"relative"
  },
  groundBox:{
    alignItems:'center',
    width:"100%"
  },
  imageAvatar: {
    // backgroundColor:"red",
    width: 150,
    height: 150,
  },
  textImage: {
    fontSize: 23,
    fontWeight: "bold",
  },
  buttonLogout:{
    backgroundColor:"#fff",
    width:"95%",
    padding:"3%",
    borderRadius:10,
    alignItems:'center',
    elevation:6,
    // shadowColor:
  },
});
