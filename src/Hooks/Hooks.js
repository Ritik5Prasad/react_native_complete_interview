import {View, Text, SafeAreaView, StyleSheet, Button} from 'react-native';
import React, {useMemo, useState} from 'react';
import UseLayoutEffect from './UseLayoutEffect';
import UseCallback from './UseCallBack';
import ForwardRef from './ForwardRef';
import UseContext from './UseContext';

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  //   const expensionValue = useMemo(() => {
  //     console.log('Calculating...');
  //     let total = 0;
  //     for (let i = 0; i < 1e7; i++) {
  //       total += i;
  //     }
  //     return total;
  //   }, [count]);

  //   const calculateExpensiveValue = () => {
  //     console.log('Calculating...');
  //     let total = 0;
  //     for (let i = 0; i < 1e7; i++) {
  //       total += i;
  //     }
  //     return total;
  //   };

  //   const expensiveValue = calculateExpensiveValue();

  return (
    <SafeAreaView style={styles.container}>
      {/* <UseLayoutEffect /> */}

      {/* <Text>Expensive Calculation: {expensionValue}</Text>
      <Button title="Increase Count" onPress={() => setCount(count + 1)} />
      <Button title="Update Input" onPress={() => setInput(input + '!')} />
      <Text>Input: {input}</Text> */}

      {/* <UseCallback /> */}

      {/* <ForwardRef /> */}

      {/* <UseContext /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Hooks;
