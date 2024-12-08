
//This is the  Frontend

import React, { useEffect, useState } from 'react';
import Portfolio from './portfolio';
import Axios from 'axios';

function App() {
  const [data, setData] = useState(""); // Assume API returns an array

  const getData = async () => {
    try {
      const response = await Axios.get('http://localhost:4004/users');
      setData(response.data); // Fix: Use response.data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData(); // Fetch data on component mount
  }, "");

  return (
    <>
      <h1>Hello</h1>
       <div className="card">
        <button onClick={() => alert('Button clicked!')}>Click Me</button>
      </div>
      <h1>{data}</h1>


      <div><Portfolio/></div>
    </>
  );
}

export default App;
