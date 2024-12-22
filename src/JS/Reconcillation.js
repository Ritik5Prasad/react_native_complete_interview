import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Reconciliation = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John');

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleChangeName = () => {
    setName(name === 'John' ? 'Jane' : 'John');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Reconciliation Example</Text>
      <Text style={styles.text}>Count: {count}</Text>
      <Button title="Increase Count" onPress={handleIncrease} />
      <Text style={styles.text}>Name: {name}</Text>
      <Button title="Change Name" onPress={handleChangeName} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Reconciliation;
