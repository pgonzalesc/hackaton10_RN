import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import { MainStackNavigator, ContactStackNavigator } from "../StackNavigator";
import Splash from '../../screens/Splash';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'md-home' : 'md-home-outline';
          } else if(route.name === 'Splash') {
            iconName = focused ? 'md-exit' : 'md-exit-outline';
          }
          return (<Icon name={iconName} size={size} color={color}/>);
        },
      })}
      tabBarOptions={{
        activeTintColor: '#56B5C1',
        inactiveTintColor: 'gray',
      }} >
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Splash" component={Splash} />
      {/* <Tab.Screen name="Contact" component={ContactStackNavigator} /> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;