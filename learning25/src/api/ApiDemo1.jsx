import React, { useState } from 'react'
import axios from 'axios'
const ApiDemo1 = () => {
    const [msg,setMsg]= useState("");
      const [users, setUsers] = useState([]);
    const getdata =  async ()=>{
        //URL -->API endpoint
        //Promise<AxiosResponse<any>
        const res = await axios.get("https://node5.onrender.com/user/user");
         console.log("response axios object",res)
           //to access api response u need to call data variable from res
            console.log("api response...",res.data)
        console.log("api response message variable..",res.data.message)
        console.log("api  response data variable",res.data.data)
        
        setMsg(res.data.message)
         setUsers(res.data.data);
    }

    const deleteUser = async(id)=>{
      //id == userId
      //alert(id)
      //delete api call
      //REUEST METGOD DLEETE https://node5.onrender.com/user/user/{userid}
      const confirmm = confirm("Are you sure to delete?");
      if(confirmm==false){
        return;
      }   
      else{
      const res = await axios.delete(`https://node5.onrender.com/user/user/${id}`)
      console.log(res)
      if(res.status==204){
        alert("user deleted successfully!!")
        //get API CALL --> database updated..
        getdata()
      }
    }
    }
  return (
 <div style={{textAlign:"center"}}>
        <h1>API DEMO 1</h1>
        <button onClick={getdata}>GET</button>
        {msg}
        <table className='table table-dark'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>EMAIL</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {
              users?.map((user)=>{
                return<tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <td>{user.isActive == true?"true":"false"}</td>
                  <td>
                    <button className='btn btn-danger' onClick={()=>{deleteUser(user._id)}}>DELETE</button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
    </div>
  )
}

export default ApiDemo1
