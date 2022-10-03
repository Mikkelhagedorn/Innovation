import infoScreen from './infoScreen';
import FirstScreen from "./stackComponents/btn_firstScreen";
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SecondScreen from './stackComponents/btn_secondScreen';


const Stack = createStackNavigator();

function StackNavigatorC() {
    return (
        <Stack.Navigator
            initialRouteName="Info"
        >
            <Stack.Screen name="Info" component={infoScreen}
                          options={{
                              headerTitleAlign: 'center',
                              headerTitleStyle: {color: 'white'},
                              cardStyle: {backgroundColor:'#FFFFFF'}}
                          }
            />
            <Stack.Screen name="FirstScreen" component={FirstScreen} options={{
                headerTitleStyle: { textAlign: 'right', color: 'white' },
            }} />
            <Stack.Screen name="SecondScreen" component={SecondScreen} options={{
                headerTitleStyle: {color: 'black'},
            }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigatorC
