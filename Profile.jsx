  // fianlly wala gist k ho vanda try ekchoti jasari ni chalcha ani tei success vayo vane aru chaldaina  nita tara finally chai chalcha chalcha je vayeni 



  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
import { ErrorIcon } from 'react-hot-toast';
  
  const Profile = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    // useEffect(() => {
    //   // Function to fetch data using Axios
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get('https://fakestoreapi.com/products/1');
    //       setData(response.data);
    //     } catch (error) {
    //       setError(error);
    //     } finally {
    //       setIsLoading(false);
    //     }
    //   };
  
    //   // Call the fetchData function when the component mounts
    //   fetchData();
    // }, []);
    useEffect(()=>{
      const fetchData = () =>{
        axios.get('https://fakestoreapi.com/products/1').then((response) =>{
          setData(response.data);
          setIsLoading(false)
        })
        .catch((error) =>{
          setError(error);
          setIsLoading(false)
        })
      }
    })
  
    return (
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <>
            <h2>Product Details</h2>
            <p>Title: {data.title}</p>
            <p>Price: ${data.price}</p>
          </>
        )}
      </div>
    );
  };
  
  export default Profile;
  

