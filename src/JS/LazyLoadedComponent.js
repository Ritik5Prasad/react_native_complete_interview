import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LazyLoadedComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from Lazy Loaded Component!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

export default LazyLoadedComponent;
