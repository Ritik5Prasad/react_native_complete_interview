import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name} makes a noise`;
};

// Child class (Object) inherits from Animal
function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Set the prototype of Dog to be an instance of Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Override the speak method
Dog.prototype.speak = function () {
  return `${this.name} barks`;
};

const PrototypalInheritance = () => {
  const dog = new Dog('Buddy', 'Golden Retriever');
  const animal = new Animal('Generic Animal');

  return (
    <View style={styles.container}>
      <Text>{dog.speak()}</Text>
      <Text>{animal.speak()}</Text>
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
});

export default PrototypalInheritance;
