import React from 'react'
import Mytable from '../common/Mytable'

const Tableimple = () => {
   const mybooks =  [
        { id:101, name: "java" , price: 120 , ratings: 8.8,},
        { id:102, name: "Cpp" , price: 100 , ratings: 7.8},
        { id:103, name: "js" , price: 150 , ratings: 8.9}
    ]


    // console.log(Object.keys(mybooks[0]))
    // const myobj={id:1, name:"daraksha" , age:20}
    // console.log(Object.keys(myobj))  //obj.keys takes an obj as arguement and return an array of keys of that
  return (
    <div style={{textAlign:"center"}}>
      <h1>My table implementation</h1>
      <Mytable header ={Object.keys(mybooks[0])}  data={mybooks}></Mytable>
    </div>
  )
}

export default Tableimple
