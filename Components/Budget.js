import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Budget = (props) => {
    return (
        <View>
            <Text style={styles.text}>
                Your budget is {props.amount}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainText: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red',
        fontSize: 30
    }
});

export default Budget;