import React, { useEffect, useState } from 'react'
import  queryString from 'query-string';
import { Link, useLocation } from 'react-router-dom';
import ReactPlayer from "react-player";
import axios from 'axios';

const Video = () => {
const [data,setData] = useState({});
  const location = useLocation();
  let queries = queryString.parse(location.search);
  const url = `https://image-video-uploder-api.herokuapp.com/id?id=${queries.id}`;

  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(url);
      setData(request.data[0]);
      return request;
  }

  fetchData();
  },[url]);
 console.log(data[0]);
  return (<>
   <div className='flex items-center justify-center font-bold'>video</div>
    <Link to="/">Home</Link><br/>
    <Link to="/contents">contents</Link>
    <div className='h-full w-full flex items-center justify-center'>
      <ReactPlayer  controls url={data.video} />
    </div>
    </>
  )
}

export default Video