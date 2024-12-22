import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const PromiseAsyncFetchTryCatch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    }
  };

  const fetchDataWithPromise = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(result => setData(result))
      .catch(err => setError(err.message));
  };

  return (
    <View style={styles.container}>
      <Text>Data from API:</Text>
      {data ? (
        <Text>{JSON.stringify(data)}</Text>
      ) : (
        <Text>No data loaded yet.</Text>
      )}
      {error && <Text style={styles.errorText}>Error: {error}</Text>}
      <Button title="Fetch Data with Async/Await" onPress={fetchData} />
      <Button title="Fetch Data with Promise" onPress={fetchDataWithPromise} />
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
  errorText: {
    color: 'red',
  },
});

export default PromiseAsyncFetchTryCatch;
