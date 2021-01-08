import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, RegisterScreen } from '../screens';
import { BottomNavigator } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="RegisterScreen" component={RegisterScreen} />
        </Tab.Navigator>
    );
};


const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            {/* <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} /> */}
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
        </Stack.Navigator>
        // <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
        //     <Tab.Screen name="HomeScreen" component={HomeScreen} />
        //     <Tab.Screen name="RegisterScreen" component={RegisterScreen} />
        // </Tab.Navigator>
    );
};


// const Router = () => {
//     return (
//         <Stack.Navigator initialRouteName="Splash">
//             <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
//             <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
//         </Stack.Navigator>
//     );
// };

export default Router;

const styles = StyleSheet.create({});
