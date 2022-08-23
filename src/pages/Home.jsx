import React, { useState } from 'react';
import axios from 'axios';
import {  Link, useNavigate } from "react-router-dom";


const url = "http://localhost:5000/upload"

const Home = () => {
  const [data,setData] = useState({
    title:"",
    description:"",
    photo:undefined,
    video:undefined
  });
  const history = useNavigate();

  const inputEvent = (e)=>{
    const {name,value} = e.target;
    setData((prevalue)=>{
      if(name==="photo"){
        return{
          ...prevalue,
          [name]:e.target.files[0]
        }
      }else if(name==="video"){
        return{
          ...prevalue,
          [name]:e.target.files[0]
        }
      }else{
      return {
        ...prevalue,
        [name]:value
      }
    }
    });
  }

  

  const onSubmit = async(event)=>{
    event.preventDefault();
    console.log(data.photo);

    let formdata = new FormData();

    formdata.append("title",data.title)
    formdata.append("description",data.description)
    formdata.append("photo",data.photo)
    formdata.append("video",data.video)
    const res= await axios({
      method: 'post',
      url: url,
      headers: {},
      data:formdata
    });
    console.log(res);
    if(res.status===201){
      //history.push("/contents");
      history("/contents")
    }
    
  }



  return (<><div>Home</div>
  <Link to="/contents">contents</Link>
    <div className="antialiased bg-gray-100">
    <div className=' flex min-h-screen w-full  justify-center items-center '>
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-cyan-700 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">
        <div className="flex flex-col justify-between">
          <div className="">
            <h1 className='font-bold text-4xl tracking-wide'>Upload</h1>
            <p className='pt-2 text-cyan-100 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, magnam!</p>
          </div>
          <div className=""></div>
          <div className=""></div>
        </div>
        <div className="">
          <div className="bg-white rounded-xl shadow-lg p-8  text-gray-600">
            <form action="" onSubmit={onSubmit} className='flex flex-col space-y-4'>
              <div className="">
                <label htmlFor="">Title</label>
              </div>
              <div className="">
                <input type="text" placeholder='Title' name='title' maxLength="50" onChange={inputEvent} value={data.title} className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 ' />
              </div>

              <div className="">
                <label htmlFor="">Description</label>
              </div>
              <div className="">
                <textarea type="text" placeholder='Description' name='description' maxLength="200" onChange={inputEvent} value={data.description}  className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 ' />
              </div>

              <div className="">
                <label htmlFor="">Upload Photo</label>
              </div>
              <div className="">
                <input type="file" id='photo' placeholder='Photo' name='photo' onChange={inputEvent}  className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 ' />
              </div>

              <div className="">
                <label htmlFor="">Upload Video</label>
              </div>
              <div className="">
                <input type="file" id="video" placeholder='video' name='video' onChange={inputEvent} className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 ' />
              </div>
              <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm hover:bg-cyan-600 ">Upload</button>
            </form>
          </div>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Home;