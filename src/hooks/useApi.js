import axios from 'axios';
import { useState, useEffect } from 'react';

const useApi = (recurso) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  const endpoint = `${process.env.REACT_APP_URL_API}${recurso}`

  useEffect(() => {
    const obtenerData = async () => {
      try {
        const response = await axios({
          method: 'GET',
          url: endpoint
        });
        const data = response.data;
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        console.log('Se consultó al API');
      }
    };
    obtenerData();
  }, [endpoint]);

  return ([data, error]);
}

export default useApi;