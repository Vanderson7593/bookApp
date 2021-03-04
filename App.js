import React from 'react';

import { Provider } from "react-redux";
import store from "./redux/store";

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import Home from "./screens/Home";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Add from "./screens/Add";
import Detail from './screens/Detail';

const Stack = createStackNavigator();

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: 'transparent',
    },
};

const App = () => {

    return (
        <Provider store={store}>
            <NavigationContainer theme={theme}>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                    initialRouteName='Home'>

                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='Add' component={Add} />
                    <Stack.Screen name='Detail' component={Detail} />

                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
