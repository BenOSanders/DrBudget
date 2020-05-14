import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// https://stackoverflow.com/questions/44227235/global-state-in-react-native

const Transactions = (props) => {
    const [transaction, setTrans] = useState([
        { id: 1, name: 'chipotle', cat: 'Food', amount: 10.32 },
        { id: 2, name: 'target', cat: 'Food', amount: 52.12 },
        { id: 3, name: 'Highlands Cafe', cat: 'Extra', amount: 2 }

    ]);
    
    return (
        <View>
            {/* Get transactions */}
            {/* Use transactions - display - calc budget */}
        </View>
    );
}

const styles = StyleSheet.create({
    
});

export default Transactions;