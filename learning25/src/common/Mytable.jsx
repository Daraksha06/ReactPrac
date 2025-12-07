import React from 'react'

const Mytable = (props) => {
    //{header: keyarray, data: mybooks arr}
    console.log(props.data)
  return (
    <table className='table'>
        <thead>
            <tr>
                {
                    props.header.map((h)=>{
                    return <th>{h}</th>
                    })
                }
            </tr>
        </thead>
        <tbody>
           {
            props.data.map((o)=>{
                // return <tr> 
                    
                // </tr>
                
            })
           }
        </tbody>
    </table>
  )
}

export default Mytable
