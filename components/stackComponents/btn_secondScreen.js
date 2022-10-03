import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

const navController = (navigation, route) => {
    navigation.navigate(route)}
//Text and navigation for second screen
const SecondScreen = ({navigation}) => {
    return (
        <View style={{flex: 1,backgroundColor: '#6ED4C8', alignItems: 'center', fontSize: 50}}>
                <Text>Second screen</Text>
                <Button title={"Go Back"} onPress={() => navigation.goBack()}/>  
            </View>
    );
}
//Export of the second screen so logic can be used in project
export default SecondScreen;
