import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Generator function example
function* numberGenerator() {
  let count = 0;
  while (count < 5) {
    yield count;
    count++;
  }
}

// Creating an iterator using the generator function
const iterator = numberGenerator();

const GeneratorsAndIterators = () => {
  const [currentValue, setCurrentValue] = useState(null);

  // Function to get the next value from the generator
  const getNextValue = () => {
    const result = iterator.next(); 
    if (result.done) {
      setCurrentValue('Sequence complete');
    } else {
      setCurrentValue(result.value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Current Value: {currentValue !== null ? currentValue : 'Press Next'}</Text>
      <Button title="Next Value" onPress={getNextValue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default GeneratorsAndIterators;
