import React from 'react'
import Mybutton from '../common/Mybutton'

const Movies = () => {
  const moviefunctest=()=>{
    alert("movies func called ")
  }
  return (
    <div style={{textAlign:"center"}}>
     <h1> MOVIES PAGE</h1>
      <Mybutton name = "movies" class="btn btn-danger"  func={moviefunctest} />
    </div>
  )
}

export default Movies 
