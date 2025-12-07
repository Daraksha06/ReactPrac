import { useState } from 'react'
// import './App.css'
import {Header} from "./components/Header"       //export const
import Content from './components/Content'   //export default
import {Footer} from './components/Footer'
import UseState1 from './components/UseState1'
import InputDemo from './components/InputDemo'
import InputDemo2 from './components/InputDemo2'
import InputDemoo2 from './components/InputDemoo2'
import InputDemo3 from './components/InputDemo3'
import InputDemo4 from './components/InputDemo4'
import Navbar from './components/Navbar'
import { Routes } from 'react-router-dom'
import Home from './netflix/Home'
import Movies from './netflix/Movies'
import Shows from './netflix/Shows'
import { Route } from 'react-router-dom';
import { Error404 } from './components/Error404'
import Watch from './netflix/Watch'
import Books from './components/Books'
import Tableimple from './components/Tableimple'
import { FormDemo7 } from './forms/FormDemo7'
import ApiDemo1 from './api/ApiDemo1'
function App() {
 
  return (
  <div>
      <Navbar></Navbar>
      <Routes>
            <Route path='/' element={<Home/>} ></Route>
          <Route path='/nhome' element={<Home/>} ></Route>
          <Route path='/nmovies' element={<Movies/>}  ></Route>
          <Route path='/nshows' element={<Shows/>}  ></Route>
          <Route path='/nwatch/:name' element={<Watch/>}></Route>
          <Route path='/*' element={<Error404/>}></Route>
          <Route path='/nbooks' element={<Books/>}></Route>
          <Route path='/ntableimp' element={<Tableimple/>}></Route>
           <Route path='/formdemo7' element = {<FormDemo7/>}></Route>
            <Route path='/apidemo1' element = {<ApiDemo1/>}></Route>
      </Routes>
  </div>
  )
}

export default App

// path='/*'   this is for any url other than mentioned routes , when no route is found , this element will be directed to

  //  {/* <Header></Header> */}
  //    {/* <Content></Content> */}
  //    {/* <UseState1></UseState1> */}
  //    {/* <InputDemo></InputDemo> */}
  //    {/* <InputDemo2></InputDemo2> */}
  //    {/* <InputDemoo2></InputDemoo2> */}
  //   {/* <InputDemo3></InputDemo3> */}
  //     {/* <InputDemo4></InputDemo4>
  //    <Footer></Footer> */}