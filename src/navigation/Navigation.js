import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from '../pages/FirstScreen';
import HomeScreen from '../pages/HomeScreen';


const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="First" component={FirstScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;