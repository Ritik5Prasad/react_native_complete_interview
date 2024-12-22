import {View, Text, StyleSheet} from 'react-native';
import React, {useLayoutEffect, useRef, useState} from 'react';

const UseLayoutEffect = () => {
  const [dimensions, setDimensions] = useState({});
  const viewRef = useRef(null);

  useLayoutEffect(() => {
    console.log("dimensions")
    if (viewRef.current) {
      viewRef.current.measure((x, y, width, height, pageX, pageY) => {
        setDimensions({x, y, width, height, pageX, pageY});
      });
    }
  }, []);

  console.log(dimensions)

  return (
    <View style={styles.container}>
      <View style={styles.box} ref={viewRef} />
      <Text>Box Dimensions:</Text>
      <Text>{JSON.stringify(dimensions, null, 2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default UseLayoutEffect;
