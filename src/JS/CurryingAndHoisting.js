import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const multiply = a => b => a * b;

const CurryingAndHoisting = () => {
  const [result, setResult] = useState(null);

  function showMessage() {
    alert('Hoisted function called!');
  }

  const multiplyBy3 = multiply(3);

  const handleMultiply = () => {
    const multiplicationResult = multiplyBy3(5);
    setResult(multiplicationResult);
  };

  return (
    <View style={styles.container}>
      <Text>Currying & Hoisting Example</Text>

      <Button title="Show Hoisted Message" onPress={showMessage} />

      <Button title="Multiply 3 and 5" onPress={handleMultiply} />

      {result && <Text>Result: {result}</Text>}
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
});

export default CurryingAndHoisting;
