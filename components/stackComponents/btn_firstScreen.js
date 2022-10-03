import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';


//Text and navigation for first screen
const FirstScreen = ({navigation}) => {
    return (
            <View style={{flex: 1,backgroundColor: '#6ED4C8', alignItems: 'center',fontSize: 50}}>
                <Text>First Screen</Text>
                <Button title={"Return"} onPress={() => navigation.goBack()}/>  
            </View>
    );
}
//Export of the first screen so logic can be used in project
export default FirstScreen;
