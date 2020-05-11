import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Modal, TouchableHighlight } from 'react-native';
import Data from './Data';

export default class Cat extends React.Component {
    constructor(props) {
        super(props);
        this.initData = Data;
        this.state = {
            data: this.initData,
            isModalVisible: false,
            inputText: 0,
            editedItem: 0,
            expenses: 0,
            budget: this.props.amount
        };
    }

    setModalVisible = (bool) => {
        this.setState({ isModalVisible: bool })
    };

    setInputText = (amount) => {
        this.setState({ inputText: amount })
    };

    setEditedItem = (id) => {
        this.setState({ editedItem: id })
    };

    calcExpenses = () => {
        let newExpenses = 0;
        for (i = 0; i < this.state.data.length; i++) {
            newExpenses += this.state.data[i].amount;
        };
        this.setState({ expenses: newExpenses});
    }

    handleEditItem = (editedItem) => {
        const newData = this.state.data.map(item => {
            if (item.id === editedItem) {
                item.amount = parseInt(this.state.inputText)
                return item
            }
            return item
        })
        this.setState({ data: newData })
    };

    renderItem = ({ item }) => (
        <TouchableHighlight onPress={() => { this.setModalVisible(true); this.setInputText(item.amount), this.setEditedItem(item.id) }}
            underlayColor={'#f1f1f1'}>
            <View style={styles.item} >
                {/* <View style={styles.marginLeft}>
                    <View style={[styles.menu, { backgroundColor: item.color }]}></View>
                    <View style={[styles.menu, { backgroundColor: item.color }]}></View>
                    <View style={[styles.menu, { backgroundColor: item.color }]}></View>
                </View> */}
                <Text style={styles.text}> {item.name} - {item.amount} out of {item.max} </Text>
            </View>
        </TouchableHighlight>
    );

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.mainText}>Budget Left: {this.state.budget - this.state.expenses} - {this.state.expenses}</Text>
                <FlatList
                    data={Data}
                    renderItem={this.renderItem}
                />
                <Modal animationType="fade" visible={this.state.isModalVisible}
                    onRequestClose={() => this.setModalVisible(false)}>
                    <View style={styles.modalView}>
                        <Text style={styles.text}>Change amount:</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(text) => { this.setState({ inputText: text }); console.log('state ', this.state.inputText) }}
                            value={this.state.inputText}
                            keyboardType = 'numeric'
                            editable={true}
                            multiline={false}
                            maxLength={10}
                        />
                        <TouchableHighlight onPress={() => { this.handleEditItem(this.state.editedItem); this.setModalVisible(false); this.calcExpenses() }}
                            style={[styles.touchableHighlight, { backgroundColor: 'orange' }]} underlayColor={'#f1f1f1'}>
                            <Text style={styles.text}>Save</Text>
                        </TouchableHighlight>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F5FCFF'
    },
    mainText: {
        padding: 5,
        fontSize: 25
    },
    text: {
        // justifyContent: 'center',
        // alignItems: 'center',
        // color: 'red',
        // fontSize: 30
    },
    listItem: {
        padding: 5,
        fontSize: 20

    },
    header: {
        height: 60,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    contentContainer: {
        backgroundColor: 'white',
    },
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        alignItems: 'center',
    },
    marginLeft: {
        marginLeft: 5,
    },
    menu: {
        width: 20,
        height: 2,
        backgroundColor: '#111',
        margin: 2,
        borderRadius: 3,
    },
    text: {
        marginVertical: 30,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    textInput: {
        width: '90%',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 30,
        borderColor: 'gray',
        borderBottomWidth: 2,
        fontSize: 16,
    },
    modalView: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableHighlight: {
        backgroundColor: 'white',
        marginVertical: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
    }
});

// export default Cat;