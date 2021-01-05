import React, { useState, useEffect } from 'react';

export const useFetch = (url) => {
   const [isLoading, setIsLoading] = useState(true);
   const [data, setData] = useState([]);
   const getData = async () => {
      const response = await fetch(url);
      const data = await response.json()
      .catch(error => { alert('request time out check your connection')})
      setData(data);
      setIsLoading(false);
   }

   useEffect(() => {
      getData()
   }, [url]);
   return [isLoading, data ]
}