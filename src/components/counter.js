import React, { Component, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {GlobalContext} from '../state/globalState';

const Counters = () => {

        const {state} = useContext(GlobalContext);
        const {dispatch} = useContext(GlobalContext);

        return(
            <View style = { styles.mainContainer }>
                <Text style = {{marginBottom: 20, fontWeight: 'bold'}}>{ 'The Context API Approach' }</Text>
                <Text style = { styles.counterNumber }>{ state.counter  }</Text>
                <View style = { styles.buttonContainer }>
                    <TouchableOpacity style = { styles.buttonStyle } 
                    onPress = { ()=> dispatch({type: "Increment"})}>
                        <Text style = {{ color: 'white' }}>Increment +</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {[ styles.buttonStyle, { backgroundColor:'red' } ]}
                    onPress = { ()=> dispatch({type: "Decrement"})}>
                        <Text style = {{ color: 'white' }}>Decrement -</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
}

export default Counters;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    counterNumber: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    buttonStyle: {
        backgroundColor: 'green',
        borderWidth: 1,
        height: 30,
        width: '25%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center', 
    },
})