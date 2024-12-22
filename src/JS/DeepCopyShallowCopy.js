import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const DeepCopyShallowCopy = () => {
  const [person, setPerson] = useState({
    name: 'John',
    address: {city: 'New York', zip: '10001'},
  });

  const handleShallowCopy = () => {
    console.log('--- Shallow Copy ---');
    const shallowCopy = {...person}; // Shallow copy using spread operator
    console.log('Before modification:', shallowCopy);

    shallowCopy.address.city = 'Los Angeles'; // Modify the nested property
    console.log('After modification (Shallow Copy):', shallowCopy);
    console.log('Original object (Affected by shallow copy):', person);

    setPerson(shallowCopy); // Updates the state
  };

  const handleDeepCopy = () => {
    console.log('--- Deep Copy ---');
    const deepCopy = JSON.parse(JSON.stringify(person)); // Deep copy using JSON methods
    console.log('Before modification:', deepCopy);

    deepCopy.address.city = 'San Francisco'; // Modify the nested property
    console.log('After modification (Deep Copy):', deepCopy);
    console.log('Original object (Unaffected by deep copy):', person);

    setPerson(deepCopy); // Updates the state
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deep Copy vs Shallow Copy</Text>
      <Text>Name: {person.name}</Text>
      <Text>City: {person.address.city}</Text>
      <Button title="Shallow Copy - Change City" onPress={handleShallowCopy} />
      <Button title="Deep Copy - Change City" onPress={handleDeepCopy} />
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
    fontWeight: 'bold',
  },
});

export default DeepCopyShallowCopy;
