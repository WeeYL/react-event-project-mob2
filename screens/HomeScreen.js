import * as React from 'react';
import { Text, View } from 'react-native';
import styles from '../stylesheet';
import {createStackNavigator} from "@react-navigation/stack"


function HomeMainScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'top', alignItems: 'center' }}>
        <Text style = {styles.HeaderStyle}>Valentine's Day</Text>
      </View>
    );
  }
  

  const Stack = createStackNavigator();

  export default function HomeScreen() {
  
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeMainScreen" component={HomeMainScreen} />
        </Stack.Navigator>
    );
  }