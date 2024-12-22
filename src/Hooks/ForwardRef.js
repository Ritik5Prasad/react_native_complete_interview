import React, {useRef, forwardRef, useImperativeHandle} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

// Child component
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  // Expose methods to parent via ref
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.clear();
    },
  }));

  return (
    <TextInput ref={inputRef} style={styles.input} placeholder="Type here..." />
  );
});

// Parent component
const Parent = () => {
  const customInputRef = useRef();

  return (
    <View style={styles.container}>
      <CustomInput ref={customInputRef} />
      <Button
        title="Focus Input"
        onPress={() => customInputRef.current.focus()}
      />
      <Button
        title="Clear Input"
        onPress={() => customInputRef.current.clear()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default Parent;
