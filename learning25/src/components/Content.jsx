import React from 'react'
// make git repo 
export default function Content() {
     // .js code here and .html code inside return()
  // to write/use js inside return use {}
     let year=2025;
  let name = "daraksha";
  let isTrue = true;
  let user = {
    id :1,
    age: 22,
    name : "daraksha"
  }
  return (
    <div>
      <h1>content component</h1>
      <h1>Hello</h1>
    <h2>name : {name}</h2>
    <h2>year : {year}</h2>
    <h2>is true ? {isTrue === true ? "yes" : "no"}</h2>
    {/* {user}   it will give error */}
    <h2>id : {user.id}</h2>
    <h2>age : {user.age}</h2>
    <h2>name : {user.name}</h2>
    </div>
  )
}
