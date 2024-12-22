import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';

export const useApiHook = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      const modifiedData =
        data?.products?.filter(product =>
          product.tags.some(tag => tag.toLowerCase() === 'beauty'),
        ) || [];
      setData(modifiedData);
    } catch (error) {
      Alert.alert('There was an error');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {data, loading};
};
