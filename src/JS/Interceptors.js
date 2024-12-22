import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';

const Interceptors = () => {
    
  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      config => {
        console.log('Request:', config);
        config.headers.Authorization = 'Bearer dummy-token';
        return config;
      },
      error => {
        console.error('Request Error:', error);
        return Promise.reject(error);
      },
    );

    const responseInterceptor = axios.interceptors.response.use(
      response => {
        console.log('Response:', response);
        return response;
      },
      error => {
        console.error('Response Error:', error);
        return Promise.reject(error);
      },
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  // Test API request
  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1',
      );
      console.log('Data:', response.data);
    } catch (error) {
      console.error('API Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Check console for Axios Interceptor Example</Text>
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

export default Interceptors;
