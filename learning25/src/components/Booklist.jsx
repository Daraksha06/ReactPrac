import React from 'react'

const Booklist = (props) => {
  //{books:[],delete:f}
  return (
    <div>
      <table className='table'>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>RATINGS</th>
                <th>ACTION</th>
            </tr>
        </thead>
        <tbody>
           {
             props.books.map( (b)=>{
                    return <tr>
                                <td>{b.id}</td>
                                <td>{b.name}</td>
                                <td>{b.price}</td>
                                <td>{b.ratings}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={()=>{props.delete(b.id)}}>DELETE</button>
                                </td>                                                                                                
                            </tr>
             }

             )
           }
        </tbody>
      </table>
    </div>
  )
}

export default Booklist
