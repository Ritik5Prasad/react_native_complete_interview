import {View, Text} from 'react-native';
import React from 'react';

const LetVarConst = () => {
  // Using `let` for a variable that will be reassigned
  let version = 'ES6';
  version = 'ES2020';

  // Using `const` for a constant value
  const language = 'JavaScript';

  // Using `var` (not recommended in modern JavaScript)
  var scopeTest = 'This variable is function-scoped';
  console.log(color);
  console.log(name());

  function name() {
    return 'Ritik';
  }

  let color;

  color = 'red';

  return (
    <View>
      <Text>Version: {version}</Text>
      <Text>Language: {language}</Text>
      <Text>Scope Test: {scopeTest}</Text>
    </View>
  );
};

export default LetVarConst;
