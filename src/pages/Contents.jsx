import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Contents = () => {
  const fetchUrl = "http://localhost:5000/data";
  const [data,setData]= useState([]);

  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      console.log(request);
      setData(request.data);
      return request;
  }

  fetchData();
  },[fetchUrl]);

  console.log(data);
  return (<>
    <div>contents</div>
    <Link to="/">Home</Link>

    <div className="h-full bg-gray-100">
      <section className='md:h-full flex items-center text-gray-600'>

        <div className="container px-5 py-24 mx-auto">

          <div className="text-center mb-12">

            <h5 className='text-base md:text-lg text-indigo-700 mb-1'>Contents</h5>
            <h1 className='text-4xl md:text-6xl text-gray-700 font-semibold'>Videos</h1>
          </div>

          <div className="flex flex-wrap -m-4">

            {
              data.map((cl)=>{
                return(
                  <Link key={cl._id} to={`/video?id=${cl._id}`} as="video">
                  <div className="p-4 sm:w-1/2 lgw-1/3">

              <div className="h-full w-[300px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img src={cl.thumbnail} alt="img" className='lg:h-72 md:h-48 w-full object-cover object-center' />

                <div className="p-6 hover:bg-blue-100 hover:text-whiten transition duration-300 ease-in">
                  <h1 className='text-2xl font-semibold mb-3 '>{cl.title}</h1>
                  <p className='leading-relaxed mb-3'>{cl.description}</p>
                </div>
              </div>
            </div>
            </Link>
                )
              })
              }
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Contents;