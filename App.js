import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Budget from './Components/Budget';
import Cat from './Components/Cat';

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
    </SafeAreaView>
  );
};

export default App;