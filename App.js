import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Budget from './Components/Budget';
import Cat from './Components/Cat';
import Nav from './Components/Nav';

import { SafeAreaView } from 'react-native';

const App = () => {
//   constructor(props) {
//     super(props);
//     // console.log(JSON.stringify(props));
// }

  const budgetAmount = 600;

  return (
    <SafeAreaView>
      <Budget amount={budgetAmount} />
      <Cat amount={budgetAmount} />
      <Nav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  hide: {
    display: 'none'
  }
});

export default App;