import React from 'react'

const Mybutton = (props) => {
  return (
    <button className={props.class || "btn btn-primary"} onClick={()=>{props.func()}} >
        {props.name ||"test"}
    </button>
  )
}

export default Mybutton
