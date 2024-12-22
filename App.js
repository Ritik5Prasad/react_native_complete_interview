import React from 'react';
import LifecylceComponent from './src/components/ClassComponent';
import {StyleSheet, View} from 'react-native';
import FunctionalComponent from './src/components/FunctionalComponent';
import BasicComponents from './src/components/BasicComponents';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Hooks from './src/Hooks/Hooks';
import Javascript from './src/JS/Javascript';
import FinalHomeWork from './src/FinalHomeWork';

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* <LifecylceComponent /> */}
        {/* <FunctionalComponent /> */}
        {/* <View style={styles.flex2} /> */}
        {/* <BasicComponents /> */}
        {/* <Hooks /> */}
        {/* <Javascript /> */}
        <FinalHomeWork />
      </View>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  flex2: {
    backgroundColor: 'green',
    flex: 2,
  },
});
export default App;
