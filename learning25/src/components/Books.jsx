import React, { useState } from 'react'
import Booklist from './Booklist'
import Mybutton from '../common/Mybutton'

const Books = () => {
    const [book,setBook] = useState([
        { id:101, name: "java" , price: 120 , ratings: 8.8},
        { id:102, name: "Cpp" , price: 100 , ratings: 7.8},
        { id:103, name: "js" , price: 150 , ratings: 8.9}
    ])
    const deleteBook = (id)=>{
        // alert(id)
        const afterdel = book.filter((b)=>{ return b.id != id})
        console.log(afterdel)
        setBook(afterdel)
    }
  return (
    <div style={{textAlign:"center"}}>
      <h1>Books</h1>
      <Mybutton ></Mybutton>
      <Booklist books = {book} delete={deleteBook}></Booklist>
    </div>
  )
}

export default Books
