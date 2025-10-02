import { LinearGradient } from "expo-linear-gradient";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const chatMessages = [
  {
    id: "1",
    sender: "AI",
    text: "Chào bạn!",
    avatar: require("../../assets/images/icon-ai.png"),
  },
  {
    id: "2",
    sender: "User",
    text: "Chào AI, mình có câu hỏi.",
    avatar: require("../../assets/images/user-avatar.png"), // Thay thế bằng avatar người dùng
  },
  {
    id: "3",
    sender: "AI",
    text: "Tôi luôn sẵn sàng lắng nghe.",
    avatar: require("../../assets/images/icon-ai.png"),
  },
  {
    id: "4",
    sender: "User",
    text: "Câu hỏi của tôi là...",
    avatar: require("../../assets/images/user-avatar.png"),
  },
  {
    id: "5",
    sender: "AI",
    text: "Hãy đặt câu hỏi của bạn.",
    avatar: require("../../assets/images/icon-ai.png"),
  },
  {
    id: "6",
    sender: "User",
    text: "Bạn có thể giúp gì cho tôi?",
    avatar: require("../../assets/images/user-avatar.png"),
  },
  {
    id: "7",
    sender: "AI",
    text: "Tôi có thể trả lời câu hỏi, cung cấp thông tin...",
    avatar: require("../../assets/images/icon-ai.png"),
  },
  {
    id: "8",
    sender: "User",
    text: "Cảm ơn bạn!",
    avatar: require("../../assets/images/user-avatar.png"),
  },
  {
    id: "9",
    sender: "AI",
    text: "Không có gì.",
    avatar: require("../../assets/images/icon-ai.png"),
  },
  {
    id: "10",
    sender: "User",
    text: "Bạn là AI thông minh.",
    avatar: require("../../assets/images/user-avatar.png"),
  },
  {
    id: "11",
    sender: "AI",
    text: "Tôi đang học hỏi mỗi ngày.",
    avatar: require("../../assets/images/icon-ai.png"),
  },
  {
    id: "12",
    sender: "User",
    text: "Bạn có thể kể một câu chuyện không?",
    avatar: require("../../assets/images/user-avatar.png"),
  },
  {
    id: "13",
    sender: "AI",
    text: "Ngày xửa ngày xưa...",
    avatar: require("../../assets/images/icon-ai.png"),
  },
  {
    id: "14",
    sender: "User",
    text: "Tiếp đi...",
    avatar: require("../../assets/images/user-avatar.png"),
  },
  {
    id: "15",
    sender: "AI",
    text: "Câu chuyện kết thúc ở đây.",
    avatar: require("../../assets/images/icon-ai.png"),
  },
  {
    id: "16",
    sender: "User",
    text: "Hơi ngắn.",
    avatar: require("../../assets/images/user-avatar.png"),
  },
  {
    id: "17",
    sender: "AI",
    text: "Bạn muốn một câu chuyện dài hơn?",
    avatar: require("../../assets/images/icon-ai.png"),
  },
  {
    id: "18",
    sender: "User",
    text: "Có lẽ lần sau.",
    avatar: require("../../assets/images/user-avatar.png"),
  },
  {
    id: "19",
    sender: "AI",
    text: "Được thôi.",
    avatar: require("../../assets/images/icon-ai.png"),
  },
  {
    id: "20",
    sender: "User",
    text: "Tạm biệt!",
    avatar: require("../../assets/images/user-avatar.png"),
  },
];

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
        <FlatList
          data={chatMessages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                {
                  flexDirection: "row",
                  alignItems: "flex-end",
                  padding: 3,
                  marginBottom: 10,
                },
                item.sender === "User" ? styles.rowUser : styles.rowAI,
              ]}
            >
              {item.sender == "AI" && (
                <Image
                  source={item.avatar}
                  style={[styles.avatar, { backgroundColor: "gray" }]}
                />
              )}

              <LinearGradient
                colors={
                  item.sender === "User"
                    ? ["#ffffffff", "#dededeff"]
                    : ["#14b9ff", "#7ddfff"]
                }
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[
                  {
                    maxWidth: "70%",
                    borderRadius: 10,
                    padding: 8,
                  },
                  item.sender === "User" ? styles.userMess : styles.AIMess,
                ]}
              >
                <Text
                  style={[
                    { fontWeight: "bold" },
                    item.sender === "User"
                      ? [{ color: "black" }]
                      : [{ color: "white" }],
                  ]}
                >
                  {item.text}
                </Text>
              </LinearGradient>
              {item.sender == "User" && (
                <Image source={item.avatar} style={styles.avatar} />
              )}
            </View>
          )}
        ></FlatList>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
          }}
        >
          <TextInput
            placeholder="Nhập tin nhắn..."
            multiline
            style={{
              flex: 1,
              backgroundColor: "#ffffffff",
              borderRadius: 10,
              elevation: 3,
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              elevation: 5,
              width: "15%",
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 13,
                fontWeight: "bold",
              }}
            >
              Gửi
            </Text>
          </TouchableOpacity>
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
    borderRadius: 10,
    elevation: 6,
    flexDirection: "column",
    padding: 10,
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
  rowUser: {
    justifyContent: "flex-end",
  },
  rowAI: {
    justifyContent: "flex-start",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  userMess: {
    backgroundColor: "#ffffffff",
    elevation: 3,
    marginRight: 4,
  },
  AIMess: {
    backgroundColor: "#14b9ffff",
    elevation: 3,
    marginLeft: 5,
  },
  //#endregion
});
