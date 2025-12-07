import React from 'react'
import Mybutton from '../common/Mybutton'

const Home = () => {
  const myhometest=()=>{
    alert("home func called")
  }
  return (
    <div style={{textAlign:"center"}}>
     <h1> HOME PAGE</h1>
     <Mybutton name="Home" class="btn btn-info" func={myhometest}></Mybutton>
    </div>
  )
}

export default Home
