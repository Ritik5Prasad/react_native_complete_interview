import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component Mounted');

    return () => {
      console.log('componentWillUnmount: Component Unmounted');
    };
  }, []);

  useEffect(() => {
    console.log("Count Updated")
    if (count == 5) {
      Alert.alert('Count Reached 5');
    }
  }, [count]);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text style={styles.text}>Functional Component Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
    fontSize: 22,
  },
});

export default FunctionalComponent;
