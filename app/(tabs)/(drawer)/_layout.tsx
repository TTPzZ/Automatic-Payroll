import { DrawerToggleButton } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import { Drawer } from "expo-router/drawer";
import { StyleSheet } from "react-native";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerLeft: () => <DrawerToggleButton tintColor="white" />,
        headerBackground: () => (
          <LinearGradient
            colors={["#00c6ff", "#7ddfff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={StyleSheet.absoluteFill}
          />
        ),
        drawerActiveBackgroundColor: '#ffffff',
        drawerActiveTintColor: '#000000',
        drawerInactiveTintColor: '#585454ff',
        
        drawerStyle:{
            backgroundColor: '#f5f5f5',

        },
        drawerLabelStyle:{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 16,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
          color: "white",
        },
      }}
    >
      <Drawer.Screen
        name="shifts"
        options={{
          title: "Lịch Làm Việc",
          headerTitle: "Lịch Làm Việc",
          // headerTitleStyle:{
          //       fontWeight: "bold",
          // color: "white",
          // paddingRight: "10%",
          // }
        }}
      />
      <Drawer.Screen
        name="plan"
        options={{
          title: "Kế Hoạch",
          headerTitle: "Kế Hoạch",
        }}
      />
    </Drawer>
  );
}
