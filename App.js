import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialIcons } from '@expo/vector-icons'; 


import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import EventsScreen from "./screens/EventsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions=
        {({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            // home
            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            // events
            } else if (route.name === "Events") {
              iconName = focused ? "ios-list-box" : "ios-list";
            }
            //contact
            else if (route.name === "Contact") {
              return <MaterialIcons name="contacts" size={30} color={color} />
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} 
            
            
            />;
          },
        })}
        tabBarOptions=
        {{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}>
        
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Events" component={EventsScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
