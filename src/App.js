import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Contents from "./pages/Contents";
import Video from "./pages/Video"

function App() {
  return (<>
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/contents' element={<Contents/>} />
    <Route path='/video' element={<Video/>} />
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
