import * as React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../stylesheet';
import {createStackNavigator} from "@react-navigation/stack"

function EventHomeScreen({navigation}){

    return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style = {styles.HeaderStyle}>Event Home</Text>
        <Button title="go to second screen" onPress={()=>navigation.navigate("EventSecondScreen")}></Button>

  </View>)
}

function EventSecondScreen(){

    return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style = {styles.HeaderStyle}>Event Second Screen</Text>
  </View>)
}


const Stack = createStackNavigator();

export default function EventsScreen() {
  
    return (
        <Stack.Navigator>
            <Stack.Screen name="EventHomeScreen" component={EventHomeScreen} />
            <Stack.Screen name="EventSecondScreen" component={EventSecondScreen} />
        </Stack.Navigator>
    );
  }