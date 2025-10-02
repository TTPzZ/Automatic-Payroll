import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.total}>
        <LinearGradient
          colors={["#00c6ff", "#7ddfff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.labelTotal, { height: "40%" }]}
        >
          <Text style={styles.textVND}>500.000</Text>
        </LinearGradient>
        <View style={styles.totalRow}>
          <LinearGradient
            colors={["#FF0033", "#FF6F91"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.labelTotal]}
          >
            <Text style={styles.textVND}>-500.000</Text>
          </LinearGradient>
          <LinearGradient
            colors={["#00E676", "#A7FF83"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.labelTotal}
          >
            <Text style={styles.textVND}>+500.000</Text>
          </LinearGradient>
        </View>
      </View>
      <View style={styles.messagee}>
        <View style={styles.messageAI}>
          <Image
            source={require("../../assets/images/icon-ai.png")}
            style={styles.imagee}
          ></Image>
          <View>
               <LinearGradient
          colors={["#00c6ff", "#7ddfff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.labelTotal, { width: 40 }]}
        ></LinearGradient>
              <Text>hehe</Text>
          </View>
        
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width:'100%',
    // justifyContent:'center',
    // alignItems:'center',
    flexDirection: "column",
    backgroundColor: "#f5f5f5",
    position: "relative",
  },
  //#region Total
  total: {
    flex: 1,
    backgroundColor: "#fff",
    margin: "1%",
    borderRadius: 20,
    elevation: 6,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
  },

  textVND: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#fff",
  },
  labelTotal: {
    width: "40%",
    // height: "30%",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  totalRow: {
    // flex: 1,
    // backgroundColor: "red",
    flexDirection: "row",
    gap: 10,
    height: "40%",
  },
  //#endregion
  //#region MessageAI
  messagee: {
    flex: 4,
    backgroundColor: "#ffffffff",
    margin: "1%",
    borderRadius: 20,
    elevation: 6,
    flexDirection: "column",
  },
  messageAI: {
    flexDirection: "row",
    // height: "10%",
  },
  imagee: {
    height: 50,
    width: 50,
    backgroundColor: "red",
    borderRadius: 10,
  },
  //#endregion
});
