import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const MainButton = props => {
    return (
          <TouchableOpacity onPress = {props.onPress}>
              <View style = {styles.button}>
                    <Text style = {styles.buttonText}>{props.children}</Text>
              </View>
          </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button : {
        backgroundColor: '#006400',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    }
});

export default MainButton;