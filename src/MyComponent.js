// src/components/MyComponent.js

import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState([]); // State to store the fetched data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage any errors

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_BACKEND_URL; // Get the backend URL from .env

    // Fetch data from Django API
    fetch(`${apiUrl}some-endpoint/`)
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Set the fetched data to state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        setError(error); // Handle errors
        setLoading(false); // Set loading to false if an error occurs
      });
  }, []); // Empty dependency array ensures the fetch happens once when the component mounts

  // Render component based on loading state and data
  if (loading) {
    return <div>Loading...</div>; // Show loading message
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Show error message if any
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li> // Adjust based on your API response structure
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
