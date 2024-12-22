import React, {useState, useCallback} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Child = React.memo(({onButtonClick}) => {
  console.log('Child rendered');
  return <Button title="Click Me" onPress={onButtonClick} />;
});

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const incrementCount = useCallback(() => {
    setCount(prev => prev + step);
  }, [step]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Count: {count} Step:{step}
      </Text>
      <Child onButtonClick={incrementCount} />
      <Button title="Increase Step" onPress={() => setStep(prev => prev + 1)} />
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
    fontSize: 18,
    marginBottom: 16,
  },
});

export default UseCallBack;
