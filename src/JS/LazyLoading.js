import React, {Suspense, lazy, useState} from 'react';
import {View, Text, Button, StyleSheet, ActivityIndicator} from 'react-native';

// Lazy load the component
const LazyLoadedComponent = lazy(() => import('./LazyLoadedComponent'));

const LazyLoadingAndCodeSplitting = () => {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lazy Loading and Code Splitting Example</Text>
      <Button title="Load Component" onPress={() => setShowComponent(true)} />

      {showComponent && (
        <Suspense fallback={<ActivityIndicator size="large" color="#0000ff" />}>
          <LazyLoadedComponent />
        </Suspense>
      )}
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
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default LazyLoadingAndCodeSplitting;
