import React from 'react'
import Mybutton from '../common/Mybutton'

const Shows = () => {
  const showtest=()=>{
    alert("show button clicked ")
  }
  return (
    <div style={{textAlign:"center"}}>
     <h1> SHOWS PAGE</h1>
     <Mybutton  name = "show"  func={showtest} ></Mybutton>
    </div>
  )
}

export default Shows
