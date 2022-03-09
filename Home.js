import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { Link, } from 'react-router-dom';

const Home = () => {
  const[user,setUser]=useState([]);

  useEffect(()=>{
  loadUser();
  },[]);

  let loadUser= async () =>{
    const result= await axios.get("http://localhost:5000/user");
     setUser(result.data);
    
  }
  let Delete= async (id) => {
    await axios.delete(`http://localhost:5000/user/${id}`);
       loadUser();
  }
    return <div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
<table className="table mt-2  shadow">
    <thead className="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">name</th>
        <th scope="col">username</th>
        <th scope="col">email</th>
        <th scope="col">phone</th>
        <th>Action</th>
      </tr>
    </thead>
     <tbody>
      { 
        user.map((user,index)=>(
          <tr>
            <th>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <Link to={`/View/${user.id}`}className="btn btn-success  m-2">view</Link>
        <Link to={`/edit/${user.id}`} className="btn btn-primary  m-2">Edit</Link>
        <input type="button" className="btn btn-danger " value="Delete" onClick={()=>Delete(user.id)}></input>
      </tr>
       

          ))
      }
     
      
    </tbody>
  </table>
  </div>
  </div>
  </div>
  </div>;
};

export default Home;
