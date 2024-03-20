import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetcher = () => {
    const [data, setData] = useState([]);
   
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
   
      fetchData();
    }, []);
   
    return (
      <div className='uilisting'>
        <h1>Mock API Example</h1>
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.title}
            {item.body}
            </li>
          ))}
        </ul>
      </div>
    );
  };
   
  export default DataFetcher;