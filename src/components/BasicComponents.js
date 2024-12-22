import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {imageUri} from '../dummyData';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const fontScale = Dimensions.get('window').fontScale;
const scale = Dimensions.get('window').scale;

console.log('Dimesions', screenHeight, screenWidth, fontScale, scale);

const BasicComponents = () => {
  const insets = useSafeAreaInsets();
  console.log(insets.top);
  console.log(insets.left);
  console.log(insets.right);
  console.log(insets.bottom);

  const onLayout = e => {
    console.log(e.nativeEvent);
  };
  return (
    <View
      onLayout={onLayout}
      style={[styles.container, {paddingTop: insets.top}]}>
      {/* <SafeAreaView /> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Button')}>
        <Text numberOfLines={1}>BasicComponent</Text>
      </TouchableOpacity>
      <Image source={{uri: imageUri}} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  button: {
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    alignSelf: 'center',
  },
  img: {
    width: 240,
    height: 240,
    resizeMode: 'contain',
  },
});

export default BasicComponents;
