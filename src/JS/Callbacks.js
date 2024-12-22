import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import axios from 'axios';

export default function Callbacks() {
  const [data, setData] = useState(null);

  const handleData = responseData => {
    setData(responseData);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1',
      );
      handleData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Fetch Data" onPress={fetchData} />
      {data && <Text>{JSON.stringify(data)}</Text>}
    </View>
  );
}
