import React from 'react';
import {View,Button} from 'react-native';

const navController = (navigation, route) => {
    navigation.navigate(route)}

function InfoScreen ({navigation}) {
    return (
            <View style={{flex: 1,backgroundColor: '#6ED4C8', alignItmes: 'center',justifyContent: 'center',fontSize: 50}}> 
                <Button title="Btn1" onPress={() => navController(navigation, 'FirstScreen')}/> 
                <Button title="Btn2" onPress={() => navController(navigation, 'SecondScreen')}/> 
            </View>
    );
}

export default InfoScreen;
