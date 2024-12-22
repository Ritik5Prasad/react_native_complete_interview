import React, {useState} from 'react';
import {View, TextInput, Button, Text, StyleSheet} from 'react-native';

// Debounce function
const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

// Throttle function
const throttle = (func, limit) => {
  let lastFunc;
  let lastTime;
  return (...args) => {
    const now = new Date().getTime();
    if (!lastTime || now - lastTime >= limit) {
      func(...args);
      lastTime = now;
    }
  };
};

const DebounceThrottleExample = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedResult, setDebouncedResult] = useState('');
  const [throttledResult, setThrottledResult] = useState('');

  // Handle input change for debouncing
  const handleDebouncedChange = debounce(text => {
    setDebouncedResult(`Debounced: ${text}`);
  }, 1000); // 1000ms delay

  // Handle input change for throttling
  const handleThrottledChange = throttle(text => {
    setThrottledResult(`Throttled: ${text}`);
  }, 1000); // 1000ms limit

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type to search"
        value={searchTerm}
        onChangeText={text => {
          setSearchTerm(text);
          handleDebouncedChange(text);
          handleThrottledChange(text);
        }}
      />
      <Text>{debouncedResult}</Text>
      <Text>{throttledResult}</Text>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default DebounceThrottleExample;
