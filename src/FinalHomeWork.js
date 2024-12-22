// displays the list of products using this API and filter
// the products which has one of the tags as “beauty”
// https://dummyjson.com/products

// Create a custom hook
// Create a HOC(High Order Component)

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useApiHook} from './useApiHook';

const FinalHomeWork = () => {
  const {loading, data} = useApiHook();

  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const fetchData = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await fetch('https://dummyjson.com/products');
  //     const data = await res.json();
  //     const modifiedData =
  //       data?.products?.filter(product =>
  //         product.tags.some(tag => tag.toLowerCase() === 'beauty'),
  //       ) || [];
  //     setData(modifiedData);
  //   } catch (error) {
  //     Alert.alert('There was an error');
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const renderItemComponent = ({item}) => {
    return (
      <>
        <Text>{item?.title}</Text>
        <Text>{item?.price}</Text>
        <Text>{item?.tags?.join(',')}</Text>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="small" color="black" />
      ) : (
        <FlatList
          data={data}
          ListEmptyComponent={
            <View>
              <Text>No Data Found!</Text>
            </View>
          }
          renderItem={renderItemComponent}
          key={item => item?.id}
          keyExtractor={item => item?.id}
          contentContainerStyle={styles.flatlistContainer}
          ItemSeparatorComponent={<View style={styles.divider} />}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 3,
  },
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  flatlistContainer: {
    padding: 15,
  },
});

export default FinalHomeWork;
