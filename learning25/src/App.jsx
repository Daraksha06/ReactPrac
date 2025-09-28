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

function App() {
 
  return (
  <div>
     <Header></Header>
     {/* <Content></Content> */}
     {/* <UseState1></UseState1> */}
     {/* <InputDemo></InputDemo> */}
     {/* <InputDemo2></InputDemo2> */}
     {/* <InputDemoo2></InputDemoo2> */}
    {/* <InputDemo3></InputDemo3> */}
      <InputDemo4></InputDemo4>
     <Footer></Footer>
  </div>
  )
}

export default App
