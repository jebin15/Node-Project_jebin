import React, { useState, useEffect } from 'react';
//import axios from 'axios';
 
const FetchingData = () => {
  const [data, setData] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [filteredData, setFilteredData] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        //const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        //console.log(response.data.length);
        //setData(response.data);
        const jsonData = await response.json();
        setFilteredData(jsonData.slice(0, 10));
        setData(jsonData.slice(0, 10));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
 
    fetchData();
  }, []);

  const handleSearch = (event) => {
    const searchTitle = event.target.value;
    setSearchTitle(searchTitle);
    const filtered = data.filter(item =>
      item.title.includes(searchTitle)
    );
    setFilteredData(filtered);
  };
 
  return (
    <div className='uilisting'>
      <h1>Mock API Example</h1>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchTitle} 
        onChange={handleSearch} 
      />
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
 
export default FetchingData;