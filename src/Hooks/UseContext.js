import React, {useState, useContext, createContext} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

// Step 1: Create a Context
const ThemeContext = createContext();

const UseContext = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    // Step 2: Provide the Context value
    <ThemeContext.Provider
      value={{isDarkMode, toggleTheme: () => setIsDarkMode(prev => !prev)}}>
      <View
        style={[
          styles.container,
          {backgroundColor: isDarkMode ? '#000' : '#fff'},
        ]}>
        <Text style={styles.title}>Theme Context Example</Text>
        <ThemeToggle />
        <ThemedText />
      </View>
    </ThemeContext.Provider>
  );
};

// Step 3: Consume the Context value in a child component
const ThemeToggle = () => {
  const {toggleTheme} = useContext(ThemeContext);
  return <Button title="Toggle Theme" onPress={toggleTheme} />;
};

const ThemedText = () => {
  const {isDarkMode} = useContext(ThemeContext);
  return (
    <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
      Current Theme: {isDarkMode ? 'Dark' : 'Light'}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    marginTop: 16,
  },
});

export default UseContext;
