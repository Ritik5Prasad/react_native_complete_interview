import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const SpreadOperatorRestOperator = (props) => {
  const {obj,...res}=props

  console.log(res)
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const [person, setPerson] = useState({
    name: 'John',
    age: 30,
    city: 'New York',
  });

  const handleArrayOperations = () => {
    const newArray = [...arr, 6, 7];
    setArr(newArray);
  };

  const handleObjectOperations = () => {
    const {name, ...rest} = person;
    console.log('Name:', name);
    console.log('Rest:', rest);

    const updatedPerson = {...person, age: 31};
    setPerson(updatedPerson);
  };

  return (
    <View style={styles.container}>
      <Text>Array: {arr.join(', ')}</Text>
      <Button title="Add Elements to Array" onPress={handleArrayOperations} />

      <Text>
        Person: {person.name}, {person.age}, {person.city}
      </Text>
      <Button title="Update Age" onPress={handleObjectOperations} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SpreadOperatorRestOperator;
