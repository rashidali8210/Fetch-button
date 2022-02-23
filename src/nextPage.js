import React, { useState,useEffect } from "react";
import axios from 'axios';

const NextPage=()=>
{


const [state,setState]=useState([]);
  const allData=async () =>
  {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    setState(response.data.message);
  }
  
  useEffect(() => {
allData()
  },[]);

  return(
      <>
       
      <img src={state}/>
      
      </>
  )
}

export default NextPage;