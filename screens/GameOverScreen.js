import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return(
     <View style = {styles.screen}>
         <Text style = {{fontWeight: 'bold', fontSize: 20}} >The Game is Over!</Text>

         <Image source = {require('../assets/success.jpg')} style = {styles.image}/>

         <Text style = {styles.textDesign}> Number of Rounds: {props.roundsNumber}</Text>

         <Text style = {styles.textDesign}>Number was: {props.userNumber}</Text>

         <MainButton onPress = {props.onRestart}>NEW GAME</MainButton>
     </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textDesign : {
        fontSize: 18

    },
    image:{
        width: '80%',
        height: 300,
        borderRadius: 200,
        borderWidth: 2,
        borderColor: 'black'
    }


});


export default GameOverScreen;