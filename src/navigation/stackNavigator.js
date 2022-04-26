import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Patient from "../Patient";
import Section from "../section";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="ICU Rooms Details" component={Section}/>
        <Stack.Screen name="Patient" component={Patient}/>
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
