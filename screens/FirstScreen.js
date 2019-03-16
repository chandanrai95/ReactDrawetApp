import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class FirstScreen extends Component{
    static navigationOptions = {
        tabBarLabel: 'Screen 1',
        drawerIcon: ({tintColor}) =>{
            return(
                <MaterialIcons 
                    name="card-membership"
                    size={24}
                    style={{color: tintColor}}
                />
            );
        }
    }
    render(){
        return(
            <View style={styles.main}>
                <Text>Screen 1</Text>
                <Button
                    onPress={() => this.props.navigation.openDrawer()}
                    title="Open DrawerNavigator"
                />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    main: {
        flex:1 ,
        justifyContent: 'center',
        alignItems: 'center',
    }
})